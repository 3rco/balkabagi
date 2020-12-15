import React, {Component} from 'react';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import moment from 'moment';

export default class App extends Component {
  state = {
    age: '',
    job: null,
    date: '',
    day: '',
    weekend: null,
    canOut: null,
    time: '',
    remainingTime: '',
  };

  onChangeAge = (text) => {
    this.setState({age: text});
    console.log(this.state.age);
  };

  onSubmit = () => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let day = new Date().getDay();

    switch (day) {
      case 0:
        this.onSunday(this.state.age, hour, minute);
        break;
      case 1:
        this.onMonday(this.state.age, this.state.job, hour, minute);
        break;
      case 2:
        this.onTuesday(this.state.age, this.state.job, hour, minute);
        break;
      case 3:
        this.onWednesday(this.state.age, this.state.job, hour, minute);
        break;
      case 4:
        this.onThursday(this.state.age, this.state.job, hour, minute);
        break;
      case 5:
        this.onFriday(this.state.age, this.state.job, hour, minute);
        break;
      case 6:
        this.onSaturday(this.state.age, hour, minute);
    }
  };

  onSunday = (age, hour) => {
    let local = true;
    this.setState({remainingTime: "⚠ Bu akşam 20:00'a kadar dışarı çıkabilirsiniz."});
    if (hour < 10) {
      local = false;
      this.timeDifference('10:00 am');
    }
    if (hour >= 20) {
      local = false;
      this.setState({
        remainingTime: "⚠ Pazartesi 05:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
      });
    }
    if (age <= 20 && (hour < 13 || hour >= 16)) {
      local = false;
      if (hour < 13) {
        this.timeDifference('13:00 am');
      }

      if (hour >= 16) {
        this.setState({
          remainingTime: "⚠ Pazartesi 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
        });
      }
    }
    if (age >= 65 && (hour < 10 || hour >= 13)) {
      local = false;
      if (hour < 10) {
        this.timeDifference('10:00 am');
      }

      if (hour >= 13) {
        this.setState({
          remainingTime: "⚠ Pazartesi 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
        });
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onSaturday = (age, hour) => {
    let local = true;
    this.setState({remainingTime: "⚠ Bu akşam 20:00'a kadar dışarı çıkabilirsiniz."});
    if (hour >= 20) {
      local = false;
      this.setState({
        remainingTime: "⚠ Pazar 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
      });
    }
    if (age <= 20 && (hour < 13 || hour >= 16)) {
      local = false;
      if (hour < 13) {
        this.timeDifference('13:00 am');
      }

      if (hour >= 16) {
        this.setState({
          remainingTime: "⚠ Pazar 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
        });
      }
    }
    if (age >= 65 && (hour < 10 || hour >= 13)) {
      local = false;
      if (hour < 10) {
        this.timeDifference('10:00 am');
      }

      if (hour >= 13) {
        this.setState({
          remainingTime: "⚠ Pazar 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
        });
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onMonday = (age, job, hour) => {
    let local = true;
    this.setState({remainingTime: '⚠ En yakın kısıtlama Cumartesi 20:00 - Pazar 10:00 arası'});
    if (hour < 5) {
      local = false;
      this.timeDifference('05:00 am');
    }
    if (job === false) {
      if (age <= 20 && (hour < 13 || hour >= 16)) {
        local = false;
        if (hour < 13) {
          this.timeDifference('13:00 am');
        }

        if (hour >= 16) {
          this.setState({
            remainingTime: "⚠ Salı 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
      if (age >= 65 && (hour < 10 || hour >= 13)) {
        local = false;
        if (hour < 10) {
          this.timeDifference('10:00 am');
        }

        if (hour >= 13) {
          this.setState({
            remainingTime: "⚠ Salı 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onTuesday = (age, job, hour) => {
    let local = true;
    this.setState({remainingTime: '⚠ En yakın kısıtlama Cumartesi 20:00 - Pazar 10:00 arası'});
    if (job === false) {
      if (age <= 20 && (hour < 13 || hour >= 16)) {
        local = false;
        if (hour < 13) {
          this.timeDifference('13:00 am');
        }

        if (hour >= 16) {
          this.setState({
            remainingTime: "⚠ Çarşamba 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
      if (age >= 65 && (hour < 10 || hour >= 13)) {
        local = false;
        if (hour < 10) {
          this.timeDifference('10:00 am');
        }

        if (hour >= 13) {
          this.setState({
            remainingTime: "⚠ Çarşamba 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onWednesday = (age, job, hour) => {
    let local = true;
    this.setState({remainingTime: '⚠ En yakın kısıtlama Cumartesi 20:00 - Pazar 10:00 arası'});
    if (job === false) {
      if (age <= 20 && (hour < 13 || hour >= 16)) {
        local = false;
        if (hour < 13) {
          this.timeDifference('13:00 am');
        }

        if (hour >= 16) {
          this.setState({
            remainingTime: "⚠ Perşembe 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
      if (age >= 65 && (hour < 10 || hour >= 13)) {
        local = false;
        if (hour < 10) {
          this.timeDifference('10:00 am');
        }

        if (hour >= 13) {
          this.setState({
            remainingTime: "⚠ Perşembe 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onThursday = (age, job, hour) => {
    let local = true;
    this.setState({remainingTime: '⚠ En yakın kısıtlama Cumartesi 20:00 - Pazar 10:00 arası'});
    if (job === false) {
      if (age <= 20 && (hour < 13 || hour >= 16)) {
        local = false;
        if (hour < 13) {
          this.timeDifference('13:00 am');
        }

        if (hour >= 16) {
          this.setState({
            remainingTime: "⚠ Cuma 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
      if (age >= 65 && (hour < 10 || hour >= 13)) {
        local = false;
        if (hour < 10) {
          this.timeDifference('10:00 am');
        }

        if (hour >= 13) {
          this.setState({
            remainingTime: "⚠ Cuma 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  onFriday = (age, job, hour) => {
    let local = true;
    this.setState({remainingTime: '⚠ En yakın kısıtlama Cumartesi 20:00 - Pazar 10:00 arası'});
    if (job === false) {
      if (age <= 20 && (hour < 13 || hour >= 16)) {
        local = false;
        if (hour < 13) {
          this.timeDifference('13:00 am');
        }

        if (hour >= 16) {
          this.setState({
            remainingTime: "⚠ Cumartesi 13:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
      if (age >= 65 && (hour < 10 || hour >= 13)) {
        local = false;
        if (hour < 10) {
          this.timeDifference('10:00 am');
        }

        if (hour >= 13) {
          this.setState({
            remainingTime: "⚠ Cumartesi 10:00'a kadar dışarı çıkmanız kısıtlanmıştır.",
          });
        }
      }
    }
    if (age <= 20 && (hour >= 13 && hour < 16)){
      this.setState({
        remainingTime: "⚠ Saat 16:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    if (age >= 65 && (hour >= 10 && hour < 13)){
      this.setState({
        remainingTime: "⚠ Saat 13:00'a kadar eve gitmeniz gerekiyor",
      });
    }
    this.setState({canOut: local});
  };

  timeDifference = (targetTime) => {
    let startTime = moment(new Date(), 'HH:mm');
    let endTime = moment(targetTime, 'HH:mm');
    let duration = moment.duration(endTime.diff(startTime));
    let hours = parseInt(duration.asHours());
    let minutes = parseInt(duration.asMinutes()) - hours * 60;
    this.setState({
      remainingTime:
        '⚠ Dışarı çıkmanıza ' + hours + ' saat ' + minutes + ' dakika var.',
    });
  };

  isWork = (item) => {
    if (item === 'yes') {
      this.setState({job: true});
    } else if (item === 'no') {
      this.setState({job: false});
    }
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#ffcc80', flex: 1}}>
        <ImageBackground
          source={{uri: 'https://i.hizliresim.com/zhlYzi.jpg'}}
          style={styles.image}
          imageStyle={{opacity: 0.1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>
              Yaşınız:{' '}
            </Text>
            <TextInput
              keyboardType={'numeric'}
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 80,
                margin: 15,
                backgroundColor: '#FFe0b2',
                borderRadius: 10,
              }}
              maxLength={3}
              onChangeText={(text) => this.onChangeAge(text)}
              value={this.state.age}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginRight: 12,
              }}>
              {' '}
              Çalışıyor musunuz?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.isWork('yes')}
              style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: '#7BB661',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                evet
              </Text>
              {this.state.job === true ? (
                <Text
                  style={{
                    position: 'absolute',
                    left: 30,
                    fontSize: 50,
                    color: 'green',
                    top: 10,
                  }}>
                  ✔
                </Text>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.isWork('no')}
              style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: '#e95c4b',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                hayır
              </Text>
              {this.state.job === false ? (
                <Text
                  style={{
                    position: 'absolute',
                    left: 30,
                    fontSize: 50,
                    color: 'red',
                    top: 10,
                  }}>
                  ✔
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              width: 150,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Button
              onPress={() => this.onSubmit()}
              title="🎃  Kontrol Et  🎃"
              disabled={
                this.state.job === null || this.state.age === '' ? true : false
              }
              color="orange"
            />
          </View>
          <View
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {this.state.canOut !== null
              ? ((
                  <View>
                    {this.state.canOut === true ? (
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          color: 'green',
                          fontWeight: 'bold',
                        }}>
                        😊 Dışarıya çıkabilirsiniz 😷
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          color: 'red',
                          fontWeight: 'bold',
                        }}>
                        🏘 Evde Kal 🏘
                      </Text>
                    )}
                  </View>
                ): null)
              : null}

            <Text style={{marginTop: 20, fontSize: 12, textAlign: 'center'}}>
              {this.state.remainingTime}
            </Text>
          </View>
        </ImageBackground>
        <View>
          {/*<AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3356580051473548/3297920485"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />*/}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
});
