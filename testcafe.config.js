module.exports = {
  src: "testcafe/tests/**/*.js",
  browsers: ["chrome"],
  reporter: "spec",
  screenshots: {
    path: "testcafe/screenshots/",
    takeOnFails: true,
  },
  videoPath: "testcafe/videos/",
  videoOptions: {
    singleFile: true,
    failedOnly: true,
    pathPattern:
      "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4",
  },
  videoEncodingOptions: {
    r: 20,
  },
};
