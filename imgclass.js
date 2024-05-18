let selectedImage;

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById('preview');
    preview.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
  selectedImage = event.target.files[0];
}
async function classifyImage() {
  if (!selectedImage) {
    alert('Please select an image.');
    return;
  }

  const model = await mobilenet.load();

  const imageElement = document.getElementById('preview');
  const imageTensor = tf.browser.fromPixels(imageElement).toFloat();

  const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]).div(tf.scalar(255));

  const predictions = await model.classify(resizedImage);

  // Display predictions
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<h2>Classification Results:</h2>';
  predictions.forEach(prediction => {
    resultsDiv.innerHTML += `<p>${prediction.className}: ${Math.round(prediction.probability * 100)}%</p>`;
  });

  //provide recommendations based on classification
  provideRecommendations(predictions);
}

function provideRecommendations(predictions) {
  const topPrediction = predictions[0].className.toLowerCase();
  const recommendationsDiv = document.getElementById('recommendations');

  switch (topPrediction) {
    case 'crop':
      recommendationsDiv.innerHTML = '<h2>Recommendations:</h2><p>This image contains a crop. You can enhance the crop yield by applying appropriate fertilizers and pesticides.</p>';
      break;
    case 'disease':
      recommendationsDiv.innerHTML = '<h2>Recommendations:</h2><p>This image contains a crop disease. To reduce the spread of the disease, consider removing infected plants and applying appropriate fungicides.</p>';
      break;
    case 'pest':
      recommendationsDiv.innerHTML = '<h2>Recommendations:</h2><p>This image contains a pest. To reduce pest damage, consider using biological controls or pesticides.</p>';
      break;
    default:
      recommendationsDiv.innerHTML = '<h2>Recommendations:</h2><p>No specific recommendations available.</p>';
  }
}