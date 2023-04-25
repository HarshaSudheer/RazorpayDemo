import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { getPaymentLink } from '../api/RazorpayApi';

const RazorpayScreen = ({setIsPayClicked}) => {
    const [paymentLink, setPaymentLink] = useState(null);

    useEffect(() => {
        handlePay();
    }, []);

    const handlePay = async () => {
        const customerDetails = {
            name: 'Jane Doe',
            contact: 9999999998,
            email: 'janedoe@email.com'
        }
        const payLink = await getPaymentLink(100, 'INR', customerDetails, 123);
        setPaymentLink(payLink.data.short_url);
    }

    return (
        <>
            {paymentLink ?
                <WebView
                    source={{ uri: paymentLink }}
                    startInLoadingState={true}
                    renderLoading={() => 
                        <View style={styles.loadingStyle}>
                            <ActivityIndicator size="large" color="#2B85F3" />
                        </View>}
                        onNavigationStateChange={(navState) => {
                            if(navState.url.includes("/callback_url?")) {
                                setIsPayClicked(false);
                            }
                        }
                    }
                />
                :
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color="#2B85F3" />
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    loadingStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }
});

export default RazorpayScreen;