---
title: Menus
description: Menus display a list of choices on a temporary surface
---

## Usage

<usage></usage>

## Props

| Name         | Type                | Description                                                                                                                 | Default  |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- |
| `label`      | `string`            | The text to show on the menu button.                                                                                        | `null`   |
| `variant`    | `filled` `outlined` | The variant of the menu button.                                                                                             | `filled` |
| `disabled`   | `boolean`           | Whether the menu button is disabled.                                                                                        | `false`  |
| `transition` | `Object`            | Item hover trantisition is framer motion <a target="_blank" href="https://www.framer.com/motion/transition/">transition</a> | `null`   |

## Child

| Name     | Description |
| -------- | ----------- |
| MenuItem | Menu item   |

## Child properties

### MenuItem

| Name          | Type                      | Description                                                                    | Default  |
| ------------- | ------------------------- | ------------------------------------------------------------------------------ | -------- |
| `label`       | `string`                  | The text to show on the menu item.                                             | `null`   |
| `disabled`    | `boolean`                 | Whether the menu item is disabled.                                             | `false`  |
| `type`        | `button` `submit` `reset` | Whether clicking on the menu item will act like a button or a form submission. | `button` |
| `description` | `string`                  | The text to be shown below the label.                                          | `null`   |
| `leading`     | `React.ReactNode`         | The component to be shown on the left of the label/description.                | `null`   |
| `trailing`    | `React.ReactNode`         | The component to be shown on the right of the label/description.               | `null`   |
