import { commitMutation } from 'react-relay';

import environment from '/src/environment';

function pickNetworkError(errors) {
  if(Array.isArray(errors) && errors[0] && errors[0].message) {
    return errors[0].message
  } else if(typeof(errors) === 'object') {
    console.log("errors: ", JSON.stringify(errors));
    return '未知错误'
  } else {
    return '未知错误'
  }
}

export default function (config) {

  commitMutation(
    environment,
    { 
      ...config,
      variables: {
        ...config.variables,
        input: {
          ...config.variables.input,
          clientMutationId: new Date().getTime().toString()
        }
      },
      onCompleted: (response, errors) => {
        const errorMessage = errors ? pickNetworkError(errors) : null
        if(config.onCompleted) {
          config.onCompleted(response, errorMessage)
        } else {
          if(errorMessage) {
            alert(errorMessage)
          }
        }
      },
      onError: (error) => {
        if(config.onError) {
          config.onError(error)
        } else {
          if(error) {
            alert(`刚才网络出现了问题，请再试一次`)
          }
        }
      }
    }
  )
}
