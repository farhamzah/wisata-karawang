import React, { Component } from 'react';
import { Dimensions, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';

import { Button, Divider, Input, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import openMap from 'react-native-open-maps';


const { width, height } = Dimensions.get('window');

class Place extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    }
  }

  renderGallery() {
    const { place } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={place.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  _goToCigentis() {
    openMap({ latitude: -6.5763069, longitude: 107.2286582});
  }
  render() {
   
    const { place } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.place}>
          <Text h2 bold>{place.name}</Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {place.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
      
          <Text gray light height={22}>{place.description}</Text>
          
          <Divider margin={[theme.sizes.padding * 0.9, 0]} />
            <Block>
            <Button onPress={this._goToCigentis}><Text bold fontsize={30}>Maps</Text></Button>
            <Text semibold>Gallery</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {place.images.slice(1, 3).map(
                (image, index) => (
                  <Image
                    key={`gallery-${index}`}
                    source={image}
                    style={styles.image}
                  />
                )
              )}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
              >
                <Text gray>+{place.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    )
  }
}

Place.defaultProps = {
  place: mocks.outdoors[0],
}

export default Place;

const styles = StyleSheet.create({
  place: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
  }
})
