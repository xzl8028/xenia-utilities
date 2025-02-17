// Copyright (c) 2015-present Xenia, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const path = require('path');

const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: './mmjstool/src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'mmjstool',
    },
    plugins: [
        new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true}),
    ],
};
