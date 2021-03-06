import DynamicStyle from '../utils/DyamicStyle';

const loginstyle = DynamicStyle.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 30,
  },

  logoContainer: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 30,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: '80%',
    height: 44,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    color: '#535C68',
  },
  signin: {
    borderRadius: 20,
    backgroundColor: DynamicStyle.bgColor,
    height: 40, width: 150,
    justifyContent: "center",
    alignItems: "center"
  },
});

module.exports = loginstyle;