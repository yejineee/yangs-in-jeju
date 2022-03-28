import React, { useEffect, useCallback, useRef } from 'react';
import * as faceapi from 'face-api.js';

const MIN_CONFIDENCE = 0.5;
const FACE_API_OPTIONS = new faceapi.SsdMobilenetv1Options({
  minConfidence: MIN_CONFIDENCE,
});

const loadFaceApiModel = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri(
    '/face-api.js-models/ssd_mobilenetv1/ssd_mobilenetv1_model-weights_manifest.json'
  );
};

const detectFaceAndLog = async (videoEl) => {
  const detectionResult = await faceapi.detectSingleFace(videoEl, FACE_API_OPTIONS);
  console.log(detectionResult?.box);
};

const openWebcamStream = async () => {
  return await navigator.mediaDevices.getUserMedia({ video: true });
};

const FaceApiTest = () => {
  const videoEl = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await loadFaceApiModel();
    const stream = await openWebcamStream();
    videoEl.current.srcObject = stream;
  }, []);

  const keepDetectingFaceAndLogging = async () => {
    await detectFaceAndLog(videoEl.current);
    setTimeout(keepDetectingFaceAndLogging);
  };

  const handleLoadedMetadata = useCallback(async () => {
    keepDetectingFaceAndLogging();
  }, []);

  return (
    <div>
      <video ref={videoEl} onLoadedMetadata={handleLoadedMetadata} autoPlay muted playsInline />
    </div>
  );
};

export default FaceApiTest;
