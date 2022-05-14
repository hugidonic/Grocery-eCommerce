import React from "react"
import { getStorybookUI, configure } from "@storybook/react-native"

import "./rn-addons"

configure(() => {
  require("./storybook-registry")
}, module)

export const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,
  asyncStorage: require("@react-native-async-storage/async-storage").default || null,
})

export function StorybookUIRoot() {
  return (
    <StorybookUI />
  )
}
