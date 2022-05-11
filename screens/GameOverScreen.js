import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import SuccessPng from '../assets/images/success.png';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={SuccessPng} />
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to
                        guess the number <Text Text style={styles.highLight}>{userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
                </View>
            </View>
        </ScrollView>

    )
}

export default GameOverScreen;
// const widthDevice = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        // height: widthDevice < 380 ? 150 : 300,
        // width: widthDevice < 380 ? 150 : 300,
        // borderRadius: widthDevice < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})