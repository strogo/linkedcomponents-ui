import reduce from 'lodash/reduce';

import { DEFAULT_LICENSE_TYPE } from '../image/constants';
import {
  AddImageSettings,
  EventFormFields,
  MultiLanguageObject,
  RecurringEventSettings,
} from './types';

export enum RECURRING_EVENT_FIELDS {
  END_DATE = 'endDate',
  END_TIME = 'endTime',
  REPEAT_DAYS = 'repeatDays',
  REPEAT_INTERVAL = 'repeatInterval',
  START_DATE = 'startDate',
  START_TIME = 'startTime',
}

export enum ADD_IMAGE_FIELDS {
  SELECTED_IMAGE = 'selectedImage',
  URL = 'url',
}

export enum IMAGE_DETAILS_FIELDS {
  ALT_TEXT = 'altText',
  LICENSE = 'license',
  NAME = 'name',
  PHOTOGRAPHER_NAME = 'photographerName',
}

export enum EXTENSION_COURSE_FIELDS {
  ENROLMENT_END_TIME = 'enrolmentEndTime',
  ENROLMENT_START_TIME = 'enrolmentStartTime',
  MAXIMUM_ATTENDEE_CAPACITY = 'maximumAttendeeCapacity',
  MINIMUM_ATTENDEE_CAPACITY = 'minimumAttendeeCapacity',
}

export enum EVENT_FIELDS {
  AUDIENCE = 'audience',
  AUDIENCE_MAX_AGE = 'audienceMaxAge',
  AUDIENCE_MIN_AGE = 'audienceMinAge',
  DESCRIPTION = 'description',
  END_TIME = 'endTime',
  EVENT_INFO_LANGUAGES = 'eventInfoLanguages',
  EVENT_TIMES = 'eventTimes',
  EXTENSION_COURSE = 'extensionCourse',
  FACEBOOK_URL = 'facebookUrl',
  HAS_PRICE = 'hasPrice',
  HAS_UMBRELLA = 'hasUmbrella',
  IMAGES = 'images',
  IMAGE_DETAILS = 'imageDetails',
  IN_LANGUAGE = 'inLanguage',
  INFO_URL = 'infoUrl',
  INSTAGRAM_URL = 'instagramUrl',
  IS_VERIFIED = 'isVerified',
  IS_UMBRELLA = 'isUmbrella',
  KEYWORDS = 'keywords',
  LOCATION = 'location',
  LOCATION_EXTRA_INFO = 'locationExtraInfo',
  NAME = 'name',
  OFFER_DESCRIPTION = 'description',
  OFFER_INFO_URL = 'infoUrl',
  OFFER_IS_FREE = 'isFree',
  OFFER_PRICE = 'price',
  OFFERS = 'offers',
  PROVIDER = 'provider',
  RECURRING_EVENTS = 'recurringEvents',
  SHORT_DESCRIPTION = 'shortDescription',
  START_TIME = 'startTime',
  SUPER_EVENT = 'superEvent',
  TYPE = 'type',
  TWITTER_URL = 'twitterUrl',
}

export enum EVENT_INFO_LANGUAGES {
  AR = 'ar',
  EN = 'en',
  FI = 'fi',
  RU = 'ru',
  SV = 'sv',
  ZH_HANS = 'zhHans',
}

export const ORDERED_EVENT_INFO_LANGUAGES = [
  EVENT_INFO_LANGUAGES.FI,
  EVENT_INFO_LANGUAGES.SV,
  EVENT_INFO_LANGUAGES.EN,
  EVENT_INFO_LANGUAGES.RU,
  EVENT_INFO_LANGUAGES.ZH_HANS,
  EVENT_INFO_LANGUAGES.AR,
];

export enum EVENT_TYPE {
  COURSE = 'course',
  EVENT = 'event',
}

export const EMPTY_MULTI_LANGUAGE_OBJECT = reduce(
  EVENT_INFO_LANGUAGES,
  (acc, lang) => ({ ...acc, [lang]: '' }),
  {}
) as MultiLanguageObject;

export const RECURRING_EVENT_INITIAL_VALUES: RecurringEventSettings = {
  [RECURRING_EVENT_FIELDS.END_DATE]: null,
  [RECURRING_EVENT_FIELDS.END_TIME]: '',
  [RECURRING_EVENT_FIELDS.REPEAT_DAYS]: [],
  [RECURRING_EVENT_FIELDS.REPEAT_INTERVAL]: 1,
  [RECURRING_EVENT_FIELDS.START_DATE]: null,
  [RECURRING_EVENT_FIELDS.START_TIME]: '',
};

export const ADD_IMAGE_INITIAL_VALUES: AddImageSettings = {
  [ADD_IMAGE_FIELDS.SELECTED_IMAGE]: [],
  [ADD_IMAGE_FIELDS.URL]: '',
};

export const EVENT_INITIAL_VALUES: EventFormFields = {
  [EVENT_FIELDS.AUDIENCE]: [],
  [EVENT_FIELDS.AUDIENCE_MAX_AGE]: '',
  [EVENT_FIELDS.AUDIENCE_MIN_AGE]: '',
  [EVENT_FIELDS.DESCRIPTION]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.END_TIME]: null,
  [EVENT_FIELDS.EVENT_INFO_LANGUAGES]: ['fi'],
  [EVENT_FIELDS.EVENT_TIMES]: [],
  [EVENT_FIELDS.EXTENSION_COURSE]: {
    [EXTENSION_COURSE_FIELDS.ENROLMENT_END_TIME]: null,
    [EXTENSION_COURSE_FIELDS.ENROLMENT_START_TIME]: null,
    [EXTENSION_COURSE_FIELDS.MAXIMUM_ATTENDEE_CAPACITY]: '',
    [EXTENSION_COURSE_FIELDS.MINIMUM_ATTENDEE_CAPACITY]: '',
  },
  [EVENT_FIELDS.FACEBOOK_URL]: '',
  [EVENT_FIELDS.HAS_PRICE]: false,
  [EVENT_FIELDS.HAS_UMBRELLA]: false,
  [EVENT_FIELDS.IMAGES]: [],
  [EVENT_FIELDS.IMAGE_DETAILS]: {
    [IMAGE_DETAILS_FIELDS.ALT_TEXT]: '',
    [IMAGE_DETAILS_FIELDS.LICENSE]: DEFAULT_LICENSE_TYPE,
    [IMAGE_DETAILS_FIELDS.NAME]: '',
    [IMAGE_DETAILS_FIELDS.PHOTOGRAPHER_NAME]: '',
  },
  [EVENT_FIELDS.IN_LANGUAGE]: [],
  [EVENT_FIELDS.IS_VERIFIED]: false,
  [EVENT_FIELDS.INFO_URL]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.INSTAGRAM_URL]: '',
  [EVENT_FIELDS.IS_UMBRELLA]: false,
  [EVENT_FIELDS.KEYWORDS]: [],
  [EVENT_FIELDS.LOCATION]: null,
  [EVENT_FIELDS.LOCATION_EXTRA_INFO]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.NAME]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.OFFERS]: [],
  [EVENT_FIELDS.PROVIDER]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.RECURRING_EVENTS]: [],
  [EVENT_FIELDS.SHORT_DESCRIPTION]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  [EVENT_FIELDS.START_TIME]: null,
  [EVENT_FIELDS.SUPER_EVENT]: null,
  [EVENT_FIELDS.TYPE]: EVENT_TYPE.EVENT,
  [EVENT_FIELDS.TWITTER_URL]: '',
};

export enum URL_PARAMS {
  TAB = 'tab',
}

export const IMAGE_ALT_TEXT_MIN_LENGTH = 6;

export const SELECT_FIELDS = [
  EVENT_FIELDS.KEYWORDS,
  EVENT_FIELDS.LOCATION,
  EVENT_FIELDS.SUPER_EVENT,
];

export const EVENT_INCLUDES = [
  'audience',
  'keywords',
  'location',
  'sub_events',
  'super_event',
];
