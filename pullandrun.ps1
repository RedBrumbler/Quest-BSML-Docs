echo "Pulling latest changes and running development build."
git pull

echo "Fetching newly added node modules..."
yarn.cmd

echo "Starting development server..."
Wait-Event -Timeout 1
yarn.cmd start