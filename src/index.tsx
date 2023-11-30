import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { dupeCommand } from "./commands/"

import settings from './components/Settings';

const Patcher = create('channel-duplicator');

const ChannelDupe: Plugin = {
    ...manifest,

    onStart() {

    },

    onStop() {

    },

    getSettingsPanel({ settings }) {
        return <Settings settings={settings} />;
    }
};

registerPlugin(ChannelDupe)