import React from 'react'
import { FormattedMessage } from 'react-intl'
export function t(id) {
  return (<FormattedMessage
    id={id}
  />)
}


export function tt(id, value) {
  return (<FormattedMessage
    id={id}
    values={value}
  />)
}