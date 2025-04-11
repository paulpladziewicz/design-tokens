import yaml from 'yaml';
import { formats, transformGroups } from 'style-dictionary/enums';

export default {
    hooks: {
        parsers: {
            'yaml-parser': {
                pattern: /\.yaml$/,
                parser: ({ contents }) => yaml.parse(contents),
            },
        },
    },
    parsers: ['yaml-parser'],
    source: [`tokens/**/*.yaml`],
    platforms: {
        css: {
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'variables.css',
                    format: formats.cssVariables,
                },
            ],
        },
        scss: {
            transformGroup: transformGroups.scss,
            buildPath: 'build/',
            files: [
                {
                    destination: '_variables.scss',
                    format: formats.scssVariables,
                },
            ],
        },
    },
};