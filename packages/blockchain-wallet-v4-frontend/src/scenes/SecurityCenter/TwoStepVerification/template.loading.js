import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FlatLoader, Text } from 'blockchain-info-components'

import { SecurityComponent, SecurityContainer, SecurityDescription, SecurityHeader, SecurityIcon, SecuritySummary } from 'components/Security'

const TwoStepVerification = (props) => {
  return (
    <SecurityContainer>
      <SecurityIcon name='lock' enabled={false} />
      <SecuritySummary>
        <SecurityHeader>
          <FormattedMessage id='scenes.security.twostepverification.title' defaultMessage='Two-Step Verification' />
        </SecurityHeader>
        <SecurityDescription>
          <Text>
            <FormattedMessage id='scenes.security.twostepverification.description' defaultMessage='Use Google Authenticator, Yubikey, or SMS Codes' />
          </Text>
          <FormattedMessage id='scenes.security.twostepverification.description2' defaultMessage='Two-Step Verification helps to prevent unauthorized access to your wallet by requiring a one-time password for every login attempt. Enable this to further secure your wallet.' />
        </SecurityDescription>
      </SecuritySummary>
      <SecurityComponent>
        <FlatLoader />
      </SecurityComponent>
    </SecurityContainer>
  )
}

export default TwoStepVerification
