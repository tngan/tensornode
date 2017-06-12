const ROOT = './';
const SERVING_API = './tensorflow_serving/apis/';
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

module.export = {
  modelDescriptor,
  predictDescriptor,
  predictionServiceDescriptor
};
