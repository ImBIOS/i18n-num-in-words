const execSync = require('child_process').execSync;
const semver = require('semver');
const packageName = 'i18n-num-in-words';

const getLastStableVersionDate = () => {
  // Get all versions including time to find the latest stable release date
  const output = execSync(`npm view ${packageName} time --json`);
  console.debug(`output: ${output}`);
  const times = JSON.parse(output);

  // Ignore pre-releases and sort by semver to get the latest version
  const stableVersions = Object.keys(times).filter(
    (version) => semver.valid(version) && !semver.prerelease(version)
  );
  console.debug(`stableVersions: ${stableVersions}`);
  const latestStableVersion = stableVersions.sort(semver.rcompare)[0];
  console.debug(`latestStableVersion: ${latestStableVersion}`);

  return new Date(times[latestStableVersion]);
};

const hasCanaryReleaseSinceLastStable = () => {
  const lastStableVersionDate = getLastStableVersionDate();

  // Get all versions
  const allVersions = execSync(`npm view ${packageName} versions --json`);
  console.debug(`allVersions: ${allVersions}`);
  const versions = JSON.parse(allVersions);
  console.debug(`versions: ${versions}`);

  // Check if there is a canary version newer than the last stable version
  return versions.some((version) => {
    const isCanary = version.includes('canary');
    console.debug(`isCanary: ${isCanary}`);
    if (!isCanary) return false;

    const versionDate = new Date(
      JSON.parse(execSync(`npm view ${packageName} time --json`))[`${version}`]
    );
    console.debug(`versionDate: ${versionDate}`);
    return versionDate > lastStableVersionDate;
  });
};

console.log(hasCanaryReleaseSinceLastStable() ? 'true' : 'false');
