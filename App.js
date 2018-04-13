/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react'
import { Provider, createStore, applyMiddleware } from 'redux'
import { View, Text } from 'react-native'
import createSagaMiddleware from 'redux-saga'

import SearchBar from './src/presentational/SearchBar'
import JobsList from './src/components/JobsList'
import reducers from './src/reducers/'
import sagas from './src/sagas/'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View><Text>teste</Text></View>
        {/* <MainScreen>
          {() => <>
            <SearchBar />
            <JobsList />
          </>
          }
        </MainScreen> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
