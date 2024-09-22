
import { jsGenerator } from './jsGenerator'
import { cssGenerator } from './cssGenerator'
import { htmlGenerator } from './htmlGenerator'

export const templateHtml = (json) =>`
  <template>
    ${htmlGenerator(json.blocks)}
    </template>
    <script lang="ts" setup>
      import { ref,reactive } from 'vue';
      ${jsGenerator(json.blocks)}
    </script>
    <style lang="${cssGenerator(json.block)?.lang}" ${cssGenerator(json.blocks).scoped? 'scoped':''}>
      ${cssGenerator(json.blocks)?.render()}
    </style>
  `


