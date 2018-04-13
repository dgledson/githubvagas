import React from 'react'
import { View, Text, Dimensions } from 'react-native'

export default class extends Component {

    render() {
        this.props.children()
    }
}