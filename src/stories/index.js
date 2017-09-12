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
import Token from '../components/Token/Token'
import SearchField from '../components/SearchField/SearchField'
import RadioButton from '../components/Button/RadioButton'
import RadioButtonGroup from '../components/Button/RadioButtonGroup'
import SegmentedButtonGroup from '../components/Button/SegmentedButtonGroup'
import SegmentedButton from '../components/Button/SegmentedButton'

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
    <Button type="default" text="Event" onPress={action('clicked')} />
    <Button type="accept" enabled={false} text="Disabled" />
    <Button type="reject" text="Reject with icon" icon="home"/>
    <Button type="accept" text="Accept with icon" icon="call" iconFirst={false}/>
    <Button type="transparent" icon="badge" />
  </div>))
  .add('RadioButton', ()=> (
    <div>
      <RadioButtonGroup name="foo" value='bar' onChange={action('change')}>
        <RadioButton value='foo'>Foo-Foo</RadioButton>
        <RadioButton value='bar'>Foo-Bar</RadioButton>
      </RadioButtonGroup>
      <hr />
      <RadioButtonGroup name="bar" value='foo' onChange={action('change')}>
        <RadioButton value='foo'>Bar-Foo</RadioButton>
        <RadioButton value='bar'>Bar-Bar</RadioButton>
      </RadioButtonGroup>
      <hr />
      <RadioButton name='disabled' enable={false} value='disabled' onChange={()=>{}}>Disabled</RadioButton>
    </div>
  ))
  .add('SegmentedButton', ()=> (
    <div>
      <SegmentedButtonGroup width="400px" name="text" value='bar' onChange={action('change')}>
        <SegmentedButton value='foo'>Foo-Foo</SegmentedButton>
        <SegmentedButton value='bar'>Foo-Bar</SegmentedButton>
        <SegmentedButton value='hello'>Foo-Hello</SegmentedButton>
        <SegmentedButton value='world'>Foo-World</SegmentedButton>
      </SegmentedButtonGroup>
      <hr />
      <SegmentedButtonGroup name="icon" value='foo' onChange={action('change')}>
        <SegmentedButton value='foo' icon="home">Icon-Foo</SegmentedButton>
        <SegmentedButton value='bar' icon="phone">Icon-Bar</SegmentedButton>
      </SegmentedButtonGroup>
      <hr />
      <SegmentedButtonGroup name="disabled" value='foo' onChange={action('change')}>
        <SegmentedButton value='foo'>Enabled</SegmentedButton>
        <SegmentedButton name='disabled' enable={false}>Disabled</SegmentedButton>
      </SegmentedButtonGroup>
    </div>
  ))

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
      <Link text="Event & Emphasized" emphasized={true} onPress={action('clicked')} />
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

storiesOf('Token', module)
  .add('Token', ()=> (
    <div>
    <Token title="Hello World" onCancel={action('Delete')}/>
    <Token title="Foo" onCancel={()=>{action("Delete")}}/>
    <Token title="Bar" onCancel={()=>{action("Delete")}}/>
    </div>
  ))

  storiesOf('SearchField', module)
  .add('SearchField', ()=> (
    <div>
    <SearchField value="Hello" placeholder="Search..." onSearch={(keyword) => {action(`Search ${keyword}`)()}}/>
    <SearchField placeholder="Search..." />

    <SearchField placeholder="Search..." width="200px" />
    <SearchField placeholder="Search..." enable={false} />
    </div>
  ))
