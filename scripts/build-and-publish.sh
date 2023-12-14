#!/bin/bash

VERSION=$(node scripts/determine-next-version.js)
echo "Building and publishing version $VERSION"
DEFAULT_LAST_TAG=$(node scripts/get-default-last-tag.js)
echo "Default last tag is $DEFAULT_LAST_TAG"

# Set the version and default last tag as environment variables
echo "VERSION=$VERSION" >>$GITHUB_ENV
echo "DEFAULT_LAST_TAG=$DEFAULT_LAST_TAG" >>$GITHUB_ENV

# Build the library
cd library
bun run build

# Set the Git user
echo "Setting Git user"
git config user.name github-actions
git config user.email github-actions@github.com

# Get last tag name to compare the history
echo "Getting last tag name"
LAST_TAG=$(git tag | tail -1)
if [ -z "$LAST_TAG" ]; then
  LAST_TAG="$DEFAULT_LAST_TAG"
fi
echo "Last tag is $LAST_TAG"

# Generate release notes from commits
echo "Generating release notes"
echo "RELEASE_NOTES=$(git log --pretty=format:"%s" $LAST_TAG..HEAD)" >>$GITHUB_ENV
echo "RELEASE_NOTES=$(echo $RELEASE_NOTES | sed 's/"/\\"/g')"

# Push the tag to the repository
git push origin $VERSION

yarn version --new-version $VERSION
npm publish --provenance --access public --tag latest
