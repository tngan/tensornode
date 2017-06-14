const ROOT = './';
const SERVING_API = './tensorflow_serving/apis/';
const GOOGLE_PROTOBUF = './google/protobuf';
const grpc = require('grpc');

const modelDescriptor = grpc.load({
  root: ROOT,
  file: `${SERVING_API}/model.proto`,
});

const predictDescriptor = grpc.load({
  root: ROOT,
  file: `${SERVING_API}/predict.proto`
});

const predictionServiceDescriptor = grpc.load({
  root: ROOT,
  file: `${SERVING_API}/prediction_service.proto`
});

const wrappers = grpc.load({
  root: ROOT,
  file: `${GOOGLE_PROTOBUF}/wrappers.proto`
});

module.exports = {
  modelDescriptor,
  predictDescriptor,
  predictionServiceDescriptor,
  wrappers: wrappers.google.protobuf,
  model: modelDescriptor.tensorflow.serving,
  serving: predictDescriptor.tensorflow.serving,
};
