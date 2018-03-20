import React,{Component} from "react"
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from "react-native"
import {connect} from "react-redux"
import * as actions from "../actions"

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.linear()
    }

    renderDescription() {
        if (this.props.expanded) {
            
            return (
                <View>
                    <Text style={{padding:10,textAlign:"center"}}>{this.props.library.description}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={ event => this.props.selectLibrary(this.props.library.id)}>
                <View>
                    <Text style={{textAlign:"center",paddingVertical:5,borderWidth:0.5,borderColor:"#dddddd"}}>{this.props.library.title}</Text>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}
export default connect(mapStateToProps, actions)(ListItem)