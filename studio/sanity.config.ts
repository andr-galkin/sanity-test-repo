import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'sanity-test-repo',

  projectId: 'j3fd117b',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Portfolio-web',
              apiId: 'e2a6be71-cfd2-4031-bdc2-8bf4ac681566',
              buildHookId: 'https://api.netlify.com/build_hooks/645a088fda3094007163fba5',
              name: 'chipper-starburst-9a19a7',
              url: 'chipper-starburst-9a19a7.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
