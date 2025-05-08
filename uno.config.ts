import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      orange: "#FF685F",
      blue: "#20284F",
      background: "#F5F7FF",
    },
  },
  presets: [
    presetWind4({
      reset: true,
    }),
    presetIcons(),
  ],
  transformers: [transformerVariantGroup()],
});
