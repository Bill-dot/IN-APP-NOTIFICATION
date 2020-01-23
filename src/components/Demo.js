import React from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { Notifications } from 'expo'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)

    }

    alertDisplay = () => {
        setTimeout(
            function () {
                Alert.alert(
                    'Notification Alert',
                    'Tap on OK to get App notification',
                    [
                        {
                            text: 'OK', onPress:  notificationFunction
                        }
                    ],
                    { cancelable: false }
                )
            }, 2000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="CLICK ME!"
                    onPress={() => this.alertDisplay()}
                />
            </View>
        )
    }
}

let notificationFunction=()=>{
    console.log('inside notificationFunction')
    const localNotification = {
        title: 'Here is your Notification',
        body: 'yo yo!'
    }

    const schedulingOptions = {
        time: (new Date()).getTime() + Number(1000)
    }

    Notifications.scheduleLocalNotificationAsync(
        localNotification, schedulingOptions
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
})