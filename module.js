// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * TinyMCE helper javascript functions
 *
 * @package    editor_tinymce
 * @copyright  2010 Petr Skoda (skodak) info@skoda.org
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

M.editor_supsub = M.editor_tinymce || {};

M.editor_supsub.init_editor = function(Y, editorid, options) {
    tinymce.PluginManager.load('supsub', M.cfg.wwwroot + '/lib/editor/supsub/supsub_plugin.js');
    if (tinymce.isGecko) {
        options.theme_advanced_resizing_min_height += 10;
        options.height += 10;
    }
    tinymce.init(options);
};

M.editor_supsub.init_instance_callback = function(inst) {
    if (!tinymce.isGecko) {
        document.getElementById(inst.editorId + '_ifr').scrolling = 'No';
    }
}
