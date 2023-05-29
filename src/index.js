import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { WaifuServiceProvider } from 'components/waifu-service-context'
import store from 'store/store'
import WaifuService from 'api/waifu-service'

import App from 'components/app'
import ErrorBoundry from 'helpers/error-boundry'

const waifuService = new WaifuService()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WaifuServiceProvider value={waifuService}>
                <App/>
            </WaifuServiceProvider>
        </ErrorBoundry>
    </Provider>
)