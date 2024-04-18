import * as yup from 'yup';

function isValidURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator

  return !!pattern.test(str);
}

const REGEX = {
  PASSWORD_VALIDATOR: /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d@$!%*#?&]{6,}$/,
  WEBSITE_VALIDATOR:
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
  PHONE_NUMBER: /^(\+\d{1,3}[-]?)?\d{7,12}$/,
  ALPHABETS: /^[aA-zZ\s]+$/,
  NUMBERS: /^[0-9\s]+$/,
  ALPHANUMERIC: /^(?![0-9]*$)[a-zA-Z0-9" "]+$/,
  VALID_EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// SCHEMAS is where i am building up all required props. SCHEMA is returning object with
// key defining input types as function to register input to that type. The thinking behind
// making type keys as function is to get identifiers upon function call and return values angainst
// those id's upon form submission
const SCHEMAS = (refCollector, onSubmitEditing, validate) => ({
  email: (id = 'email') => {
    const schema = yup.object().shape({
      [id]: yup.string().email().required('Email address is required').matches(REGEX.VALID_EMAIL,'Email should be valid')
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      keyboardType: 'email-address',
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  password: (id = 'password') => {
    const schema = yup.object().shape({
      [id]: yup.string().required('Password is required.'),
      // .matches(
      //   REGEX.PASSWORD_VALIDATOR,
      //   'Password must contain atleast 1 uppercase, digit, lowercase and a special character',
      // )
      // .min(6, 'Password must be longer than or equal to 6 characters')
      // .max(10, 'Password must not be longer than 10 characters'),
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      secureTextEntry: true,
      validate,
      id,
    };
  },
  confirmPassword: (id = 'confirmPassword') => {
    const schema = yup.object().shape({
      [id]: yup
        .string()
        .required('Passwords must match')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      secureTextEntry: true,
      validate,
      id,
    };
  },
  oldPassword: (id = 'oldPassword') => {
    const schema = yup.object().shape({
      [id]: yup
        .string()
        .min(6, 'Old password must be longer than or equal to 6 characters')
        .required('Old password is required'),
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      secureTextEntry: true,
      validate,
      id,
    };
  },
  newPassword: (id = 'newPassword') => {
    const schema = yup.object().shape({
      [id]: yup
        .string()
        .required('New password is required')
        .max(10, 'Password must not be longer than 10 characters')
        .matches(
          REGEX.PASSWORD_VALIDATOR,
          'Password must contain atleast 1 uppercase, digit, lowercase and a special character',
        )
        .notOneOf(
          [yup.ref('oldPassword'), null],
          'Password should be different',
        ),
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      secureTextEntry: true,
      validate,
      id,
    };
  },
  text: (id = 'text') => {
    const schema = yup.object().shape({
      [id]: yup.string().required(
        `${id.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase();
        })} is required`,
      ),
    });

    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  country: yup
    .object()
    .shape({
      id: yup.string().required(),
      label: yup.string().required(),
    })
    .nullable()
    .required('Please select city'),
  select: (id = 'text') => {
    const schema = yup.object().shape({
      [id]: yup
        .object()
        .shape({
          id: yup.number().required(''),
          name: yup.string().required(''),
        })
        .required(`Please select ${id}`),
    });
    // .nullable()

    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  phone: (id = 'phone') => {
    const schema = yup.object().shape({
      [id]: yup.string().required('Phone Number is required'),
      // .max(5, 'Maximum 5 character'),
    });

    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  dob: (id = 'Dob') => {
    const schema = yup.object().shape({
      // [id]: yup.string().required(`${id} is required`),
      [id]: yup.string().required('Date of Birth is required'),
    });

    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  img: (id = 'img') => {
    const schema = yup.object().shape({
      // [id]: yup.string().required(`${id} is required`),
      [id]: yup.string().required(`${id} is required`),
    });

    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
  optional: (id = 'optional') => {
    const schema = yup.object().shape({
      [id]: yup.optional().default(undefined),
    });
    return {
      schema,
      ref: refCollector(id, schema),
      onSubmitEditing: onSubmitEditing(id),
      blurOnSubmit: false,
      validate,
      id,
    };
  },
});

export {SCHEMAS};
