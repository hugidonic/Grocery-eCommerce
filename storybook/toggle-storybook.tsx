import React, { useState, useEffect } from "react"
import { DevSettings } from "react-native"
import { loadString, saveString } from "../app/utils/storage"
import { StorybookUI } from './storybook'

/**
 * Toggle Storybook mode, in __DEV__ mode only.
 *
 * In non-__DEV__ mode, or when Storybook isn't toggled on,
 * renders its children.
 *
 * The mode flag is persisted in async storage, which means it
 * persists across reloads/restarts - this is handy when developing
 * new components in Storybook.
 */
export function ToggleStorybook(props) {
  const [showStorybook, setShowStorybook] = useState(true)

  useEffect(() => {
    if (!__DEV__) {
      return undefined
    }
    
    // Load the setting from storage if it's there
    
    loadString("DEV_STORYBOOK")
      .then((storedSetting) => {
        // Set the initial value
        setShowStorybook(storedSetting === "on")
    
        if (DevSettings) {
            // Add our toggle command to the menu
            DevSettings.addMenuItem("Toggle Storybook", () => {
            setShowStorybook((show) => {
              // On toggle, flip the current value
              show = !show

              // Write it back to storage
              saveString("DEV_STORYBOOK", show ? "on" : "off")

              // Return it to change the local state
              return show
            })
          })
        }
      })
  }, [])

  if (showStorybook) {
    return <StorybookUI/>
  } else {
    return props.children
  }
}
