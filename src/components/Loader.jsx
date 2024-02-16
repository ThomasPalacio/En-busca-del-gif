
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export const LoaderFunction = () => (
  <div className='container d-flex justify-content-center align-items-center'>
    <Segment>
      {/* <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer> */}

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)
