import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'
import Link from '../components/Link/Link'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Text from '../components/Text/Text'
import BusyIndicator from '../components/BusyIndicator/BusyIndicator'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
storiesOf('Button', module)
  .add('Button', ()=> (<div>
    <Button type="default" text="Default" />
    <Button type="accept" text="Accept" />
    <Button type="reject" text="Reject" />
    <Button type="emphasized" text="Emphasized" />
    <Button type="transparent" text="Transparent" />
    <Button type="default" text="Event" onPress={()=>{ alert("Foo Bar")}} />
    <Button type="accept" enabled={false} text="Disabled" />
    <Button type="reject" text="Reject with icon" icon="home"/>
    <Button type="accept" text="Accept with icon" icon="call" iconFirst={false}/>
    <Button type="transparent" icon="badge" />
  </div>))

  storiesOf('Icon', module)
    .add('Icon', ()=> (<div>
      <Icon src="home" />
      <Icon src="sap-ui5" size="2rem" color="blue"/>
      </div>))

  storiesOf('Link', module)
    .add('Link', ()=> (<div>
      <div>
      <Link href="http://www.google.com" text="Go to Google" />
      </div>
      <div>
      <Link text="Event & Emphasized" emphasized={true} onPress={()=>{alert('clicked')}} />
      </div>
      <div>
      <Link enabled={false} text="Disabled Link" />
      </div>
      </div>
    ))

    storiesOf('Breadcrumbs', module)
      .add('Breadcrumbs', ()=> (
        <Breadcrumbs currentLocationText="currentLocation">
          <Link onPress={()=>{alert('clicked')}} text="Path1" />
          <Link onPress={()=>{alert('clicked')}} text="Path2" />
          <Link onPress={()=>{alert('clicked')}} text="Path3" />
          <Link onPress={()=>{alert('clicked')}} text="Path4" />
        </Breadcrumbs>

      ))

      storiesOf('Text', module)
        .add('Text', ()=> (
          <Text text="Hello World" />))
      storiesOf('BusyIndicator', module)
        .add('BusyIndicator', ()=> (
          <BusyIndicator />))
