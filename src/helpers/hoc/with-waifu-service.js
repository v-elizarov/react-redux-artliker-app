import React from 'react'
import { WaifuServiceConsumer  } from 'components/waifu-service-context'

const withWaifuService = () => (Wrapped) => {
    return (props) => {
        return (
            <WaifuServiceConsumer>
                {
                    (waifuService) => {
                        return (<Wrapped {...props}
                                    waifuService={waifuService}/>)
                    }
                }
            </WaifuServiceConsumer>
        )
    }
}

export default withWaifuService