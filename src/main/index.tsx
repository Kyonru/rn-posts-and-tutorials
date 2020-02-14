import React, {Component} from 'react';
import {Image, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {
  Avatar,
  Button,
  Card,
  Title,
  TextInput,
  Text,
  Paragraph,
} from 'react-native-paper';

import styles from './styles';

class Main extends Component {
  state = {
    snapshot: undefined,
    subtitle: '',
  };

  card = React.createRef<ViewShot>();

  takeSnapshot = async () => {
    if (this.card.current) {
      const snapshot = await this.card.current.capture!();
      this.setState({
        snapshot,
      });
    }
  };

  renderCard = () => {
    return (
      <ViewShot ref={this.card}>
        <Card>
          <Card.Title
            title="This is an example"
            subtitle={this.state.subtitle}
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Title>Nicer title</Title>
            <Paragraph>I like trains</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button onPress={this.takeSnapshot}>Take Snapshot</Button>
          </Card.Actions>
        </Card>
      </ViewShot>
    );
  };

  render() {
    const {snapshot} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          {this.renderCard()}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}>
            <TextInput
              label="Subtitle"
              value={this.state.subtitle}
              onChangeText={subtitle => this.setState({subtitle})}
            />
            <Text style={styles.title}> Snapshot</Text>
            {snapshot && (
              <Image
                source={{uri: snapshot}}
                resizeMode={'contain'}
                style={styles.snapshot}
              />
            )}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Main;
