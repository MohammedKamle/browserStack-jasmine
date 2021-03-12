describe('Test that Environment is Individual', function () {

  beforeAll(function () {

    const caps = {
      'os_version': process.env.OS_VERSION,
      'browserName': process.env.BROWSERNAME,
      'browser_version': process.env.BROWSER_VERSON,
      'os': process.env.OS,
      'name': 'Test that Environment is Individual',
      'build': "Test that Environment is Individual :: " + process.env.BUILD_ID
    }
    console.log("Capabilities :: " + JSON.stringify(caps));
  });

  it('True', function () {
    expect(true).toBe(true);
    console.log("True Passed");
  });

});
