---
title: Side sheets
description: Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow. They are typically anchored on the right edge of larger screens like tablets and desktops.
---

## Usage

<usage></usage>

## Props

| Props     | Type      | Description                  | Default |
| --------- | --------- | ---------------------------- | ------- |
| `divider` | `boolean` | show divider in body content | `false` |

## Sub components

| Name                 | Description                      |
| -------------------- | -------------------------------- |
| SideSheets.Activator | The activator of the side sheets |
| SideSheets.Content   | The content of the side sheets   |
| SideSheets.Header    | The header of the side sheets    |
| SideSheets.Body      | The body of the side sheets      |
| SideSheets.Action    | The action of the side sheets    |

## Activator Props

| Props     | Type      | Description                                | Default |
| --------- | --------- | ------------------------------------------ | ------- |
| `asChild` | `boolean` | set true pass any element as the activator | `false` |
| `open`    | `boolean` | Whether the sheets is open or not          | `false` |
