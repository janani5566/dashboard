import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

const BaseLayout = () => {
  return (
    <React.Fragment>

        <Aside />
        <div id="right-panel" class="right-panel">
            <Header />
            <div class="content">

            <div class="animated fadeIn">
                <h1>This is my content</h1>
            </div>
            </div>
            <div class="clearfix"></div>
            <Footer />
        </div>
    </React.Fragment>
  )
}

export default BaseLayout