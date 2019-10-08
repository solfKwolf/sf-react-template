import React from 'react'
import { FormattedMessage } from 'react-intl'
export function t(text) {
  return (<FormattedMessage
    id={text}
  />)
}