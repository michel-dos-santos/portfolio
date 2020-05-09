rm -rf deploy/public
mkdir deploy/public
cp -a dist/spa/* deploy/public
cd deploy
firebase deploy
cd ..