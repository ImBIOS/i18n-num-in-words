#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.

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
git config user.name "github-actions"
git config user.email "github-actions@github.com"

# Get last tag name to compare the history
echo "Getting last tag name"
LAST_TAG=$(git describe --tags $(git rev-list --tags --max-count=1)) # Get the latest tag based on commit date
if [ -z "$LAST_TAG" ]; then
  LAST_TAG="$DEFAULT_LAST_TAG"
fi
echo "Last tag is $LAST_TAG"

# Generate release notes from commits
echo "Generating release notes"
RELEASE_NOTES=$(git log --pretty=format:"%s" $LAST_TAG..HEAD | sed 's/"/\\"/g')
echo "RELEASE_NOTES=$RELEASE_NOTES" >>$GITHUB_ENV

# Update the package.json version
yarn version --new-version $VERSION

# Commit and push changes if needed
git commit -am "Release $VERSION"
git push origin main

# Push the tag to the repository
git tag $VERSION
git push origin $VERSION
