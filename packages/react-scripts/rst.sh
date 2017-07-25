#!/bin/sh

git clone https://github.com/MyronBatiuk/react-shopify-storefront.git

rm -rf template/src

mv -f react-shopify-storefront/src template

rm -rf react-shopify-storefront
