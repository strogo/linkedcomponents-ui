import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createEvents: Array<Event>;
  deleteEvent?: Maybe<NoContent>;
  updateEvent: Event;
  updateEvents: Array<Event>;
  updateImage: Image;
  uploadImage: Image;
};


export type MutationCreateEventArgs = {
  input: CreateEventMutationInput;
};


export type MutationCreateEventsArgs = {
  input: Array<CreateEventMutationInput>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  input: UpdateEventMutationInput;
};


export type MutationUpdateEventsArgs = {
  input: Array<UpdateEventMutationInput>;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageMutationInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageMutationInput;
};

export type NoContent = {
  __typename?: 'NoContent';
  noContent?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  event: Event;
  events: EventsResponse;
  keyword: Keyword;
  keywords: KeywordsResponse;
  keywordSet?: Maybe<KeywordSet>;
  keywordSets: KeywordSetsResponse;
  languages: LanguagesResponse;
  image: Image;
  images: ImagesResponse;
  organization: Organization;
  place: Place;
  places: PlacesResponse;
  user: User;
};


export type QueryEventArgs = {
  id?: Maybe<Scalars['ID']>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryEventsArgs = {
  adminUser?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['String']>;
  combinedText?: Maybe<Array<Maybe<Scalars['String']>>>;
  division?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  endsAfter?: Maybe<Scalars['String']>;
  endsBefore?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  isFree?: Maybe<Scalars['Boolean']>;
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordNot?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publicationStatus?: Maybe<PublicationStatus>;
  publisher?: Maybe<Array<Maybe<Scalars['String']>>>;
  showAll?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  startsAfter?: Maybe<Scalars['String']>;
  startsBefore?: Maybe<Scalars['String']>;
  superEvent?: Maybe<Scalars['ID']>;
  superEventType?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['String']>;
};


export type QueryKeywordArgs = {
  id: Scalars['ID'];
};


export type QueryKeywordsArgs = {
  dataSource?: Maybe<Scalars['String']>;
  freeText?: Maybe<Scalars['String']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllKeywords?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type QueryKeywordSetArgs = {
  id: Scalars['ID'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryKeywordSetsArgs = {
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryImageArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryImagesArgs = {
  dataSource?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['ID']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlacesArgs = {
  dataSource?: Maybe<Scalars['String']>;
  division?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllPlaces?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export enum EventStatus {
  EventCancelled = 'EventCancelled',
  EventPostponed = 'EventPostponed',
  EventRescheduled = 'EventRescheduled',
  EventScheduled = 'EventScheduled'
}

export enum PublicationStatus {
  Draft = 'draft',
  Public = 'public'
}

export enum SuperEventType {
  Recurring = 'recurring',
  Umbrella = 'umbrella'
}

export type ExternalLinkInput = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type IdObjectInput = {
  atId: Scalars['String'];
};

export type LocalisedObjectInput = {
  ar?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  zhHans?: Maybe<Scalars['String']>;
};

export type OfferInput = {
  description?: Maybe<LocalisedObjectInput>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  isFree?: Maybe<Scalars['Boolean']>;
  price?: Maybe<LocalisedObjectInput>;
};

export type CreateEventMutationInput = {
  publicationStatus?: Maybe<PublicationStatus>;
  audience?: Maybe<Array<IdObjectInput>>;
  audienceMaxAge?: Maybe<Scalars['Int']>;
  audienceMinAge?: Maybe<Scalars['Int']>;
  description?: Maybe<LocalisedObjectInput>;
  endTime?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<EventStatus>;
  externalLinks?: Maybe<Array<Maybe<ExternalLinkInput>>>;
  images?: Maybe<Array<IdObjectInput>>;
  inLanguage?: Maybe<Array<IdObjectInput>>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  keywords?: Maybe<Array<IdObjectInput>>;
  location?: Maybe<IdObjectInput>;
  locationExtraInfo?: Maybe<LocalisedObjectInput>;
  name?: Maybe<LocalisedObjectInput>;
  offers?: Maybe<Array<OfferInput>>;
  provider?: Maybe<LocalisedObjectInput>;
  shortDescription?: Maybe<LocalisedObjectInput>;
  startTime?: Maybe<Scalars['String']>;
  subEvents?: Maybe<Array<IdObjectInput>>;
  superEvent?: Maybe<IdObjectInput>;
  superEventType?: Maybe<SuperEventType>;
};

export type UpdateEventMutationInput = {
  id: Scalars['ID'];
  publicationStatus?: Maybe<PublicationStatus>;
  audience?: Maybe<Array<IdObjectInput>>;
  audienceMaxAge?: Maybe<Scalars['Int']>;
  audienceMinAge?: Maybe<Scalars['Int']>;
  description?: Maybe<LocalisedObjectInput>;
  endTime?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<EventStatus>;
  externalLinks?: Maybe<Array<Maybe<ExternalLinkInput>>>;
  images?: Maybe<Array<IdObjectInput>>;
  inLanguage?: Maybe<Array<IdObjectInput>>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  keywords?: Maybe<Array<IdObjectInput>>;
  location?: Maybe<IdObjectInput>;
  locationExtraInfo?: Maybe<LocalisedObjectInput>;
  name?: Maybe<LocalisedObjectInput>;
  offers?: Maybe<Array<OfferInput>>;
  provider?: Maybe<LocalisedObjectInput>;
  shortDescription?: Maybe<LocalisedObjectInput>;
  startTime?: Maybe<Scalars['String']>;
  subEvents?: Maybe<Array<IdObjectInput>>;
  superEvent?: Maybe<IdObjectInput>;
  superEventType?: Maybe<SuperEventType>;
};

export type UpdateImageMutationInput = {
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  license?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photographerName?: Maybe<Scalars['String']>;
};

export type UploadImageMutationInput = {
  altText?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Any']>;
  license?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photographerName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EventsResponse = {
  __typename?: 'EventsResponse';
  meta: Meta;
  data: Array<Maybe<Event>>;
};

export type ImagesResponse = {
  __typename?: 'ImagesResponse';
  meta: Meta;
  data: Array<Maybe<Image>>;
};

export type KeywordsResponse = {
  __typename?: 'KeywordsResponse';
  meta: Meta;
  data: Array<Maybe<Keyword>>;
};

export type KeywordSetsResponse = {
  __typename?: 'KeywordSetsResponse';
  meta: Meta;
  data: Array<Maybe<KeywordSet>>;
};

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  meta: Meta;
  data: Array<Maybe<Language>>;
};

export type PlacesResponse = {
  __typename?: 'PlacesResponse';
  meta: Meta;
  data: Array<Maybe<Place>>;
};

export type Meta = {
  __typename?: 'Meta';
  count: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type Division = {
  __typename?: 'Division';
  municipality?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  ocdId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  audience: Array<Maybe<Keyword>>;
  audienceMaxAge?: Maybe<Scalars['Int']>;
  audienceMinAge?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['String']>;
  description?: Maybe<LocalisedObject>;
  endTime?: Maybe<Scalars['String']>;
  extensionCourse?: Maybe<ExtensionCourse>;
  externalLinks: Array<Maybe<ExternalLink>>;
  eventStatus?: Maybe<EventStatus>;
  images: Array<Maybe<Image>>;
  infoUrl?: Maybe<LocalisedObject>;
  inLanguage: Array<Maybe<Language>>;
  keywords: Array<Maybe<Keyword>>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  location?: Maybe<Place>;
  locationExtraInfo?: Maybe<LocalisedObject>;
  name?: Maybe<LocalisedObject>;
  offers: Array<Maybe<Offer>>;
  provider?: Maybe<LocalisedObject>;
  providerContactInfo?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  publicationStatus?: Maybe<PublicationStatus>;
  shortDescription?: Maybe<LocalisedObject>;
  startTime?: Maybe<Scalars['String']>;
  subEvents: Array<Maybe<Event>>;
  superEvent?: Maybe<Event>;
  superEventType?: Maybe<SuperEventType>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type ExtensionCourse = {
  __typename?: 'ExtensionCourse';
  enrolmentStartTime?: Maybe<Scalars['String']>;
  enrolmentEndTime?: Maybe<Scalars['String']>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  id?: Maybe<Scalars['ID']>;
  altText?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  cropping?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photographerName?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type AtIdObject = {
  __typename?: 'AtIdObject';
  atId?: Maybe<Scalars['String']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  id?: Maybe<Scalars['ID']>;
  aggregate?: Maybe<Scalars['Boolean']>;
  altLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Image>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  nEvents?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['ID']>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type KeywordSet = {
  __typename?: 'KeywordSet';
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Array<Maybe<Keyword>>>;
  usage?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  dataSource?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  id?: Maybe<Scalars['ID']>;
  translationAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<LocalisedObject>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type LocalisedObject = {
  __typename?: 'LocalisedObject';
  ar?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  zhHans?: Maybe<Scalars['String']>;
};

export type Offer = {
  __typename?: 'Offer';
  description?: Maybe<LocalisedObject>;
  infoUrl?: Maybe<LocalisedObject>;
  isFree?: Maybe<Scalars['Boolean']>;
  price?: Maybe<LocalisedObject>;
};

export type Organization = {
  __typename?: 'Organization';
  affiliatedOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  classification?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  dissolutionDate?: Maybe<Scalars['String']>;
  foundingDate?: Maybe<Scalars['String']>;
  hasRegularUsers?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isAffiliated?: Maybe<Scalars['Boolean']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentOrganization?: Maybe<Scalars['String']>;
  replacedBy?: Maybe<Scalars['String']>;
  subOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  atContext?: Maybe<Scalars['String']>;
  atId?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  id?: Maybe<Scalars['ID']>;
  addressCountry?: Maybe<Scalars['String']>;
  addressLocality?: Maybe<LocalisedObject>;
  addressRegion?: Maybe<Scalars['String']>;
  contactType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  divisions: Array<Maybe<Division>>;
  email?: Maybe<Scalars['String']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Image>;
  infoUrl?: Maybe<LocalisedObject>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  nEvents?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['ID']>;
  position?: Maybe<Position>;
  postalCode?: Maybe<Scalars['String']>;
  postOfficeBoxNum?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  replacedBy?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<LocalisedObject>;
  telephone?: Maybe<LocalisedObject>;
  atId?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  coordinates: Array<Maybe<Scalars['Float']>>;
  type?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  adminOrganizations: Array<Scalars['String']>;
  dateJoined?: Maybe<Scalars['String']>;
  departmentName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isStaff?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  organizationMemberships: Array<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type CreateEventMutationVariables = Exact<{
  input: CreateEventMutationInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteEventMutation = (
  { __typename?: 'Mutation' }
  & { deleteEvent?: Maybe<(
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'noContent'>
  )> }
);

export type UpdateEventMutationVariables = Exact<{
  input: UpdateEventMutationInput;
}>;


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { updateEvent: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type CreateEventsMutationVariables = Exact<{
  input: Array<CreateEventMutationInput>;
}>;


export type CreateEventsMutation = (
  { __typename?: 'Mutation' }
  & { createEvents: Array<(
    { __typename?: 'Event' }
    & EventFieldsFragment
  )> }
);

export type UpdateEventsMutationVariables = Exact<{
  input: Array<UpdateEventMutationInput>;
}>;


export type UpdateEventsMutation = (
  { __typename?: 'Mutation' }
  & { updateEvents: Array<(
    { __typename?: 'Event' }
    & EventFieldsFragment
  )> }
);

export type ExternalLinkFieldsFragment = (
  { __typename?: 'ExternalLink' }
  & Pick<ExternalLink, 'name' | 'link'>
);

export type OfferFieldsFragment = (
  { __typename?: 'Offer' }
  & Pick<Offer, 'isFree'>
  & { description?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, infoUrl?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, price?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type BaseEventFieldsFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'atId' | 'audienceMaxAge' | 'audienceMinAge' | 'createdBy' | 'endTime' | 'eventStatus' | 'lastModifiedTime' | 'publicationStatus' | 'publisher' | 'startTime' | 'superEventType'>
  & { audience: Array<Maybe<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )>>, description?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, externalLinks: Array<Maybe<(
    { __typename?: 'ExternalLink' }
    & ExternalLinkFieldsFragment
  )>>, images: Array<Maybe<(
    { __typename?: 'Image' }
    & ImageFieldsFragment
  )>>, infoUrl?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, inLanguage: Array<Maybe<(
    { __typename?: 'Language' }
    & LanguageFieldsFragment
  )>>, keywords: Array<Maybe<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )>>, location?: Maybe<(
    { __typename?: 'Place' }
    & PlaceFieldsFragment
  )>, locationExtraInfo?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, offers: Array<Maybe<(
    { __typename?: 'Offer' }
    & OfferFieldsFragment
  )>>, provider?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, shortDescription?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type EventFieldsFragment = (
  { __typename?: 'Event' }
  & { superEvent?: Maybe<(
    { __typename?: 'Event' }
    & BaseEventFieldsFragment
  )>, subEvents: Array<Maybe<(
    { __typename?: 'Event' }
    & { subEvents: Array<Maybe<(
      { __typename?: 'Event' }
      & BaseEventFieldsFragment
    )>> }
    & BaseEventFieldsFragment
  )>> }
  & BaseEventFieldsFragment
);

export type EventQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type EventQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type EventsQueryVariables = Exact<{
  adminUser?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['String']>;
  combinedText?: Maybe<Array<Maybe<Scalars['String']>>>;
  division?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  endsAfter?: Maybe<Scalars['String']>;
  endsBefore?: Maybe<Scalars['String']>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  inLanguage?: Maybe<Scalars['String']>;
  isFree?: Maybe<Scalars['Boolean']>;
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordNot?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publicationStatus?: Maybe<PublicationStatus>;
  publisher?: Maybe<Array<Maybe<Scalars['String']>>>;
  showAll?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  startsAfter?: Maybe<Scalars['String']>;
  startsBefore?: Maybe<Scalars['String']>;
  superEvent?: Maybe<Scalars['ID']>;
  superEventType?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['String']>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: (
    { __typename?: 'EventsResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'Event' }
      & EventFieldsFragment
    )>> }
  ) }
);

export type LocalisedFieldsFragment = (
  { __typename?: 'LocalisedObject' }
  & Pick<LocalisedObject, 'ar' | 'en' | 'fi' | 'ru' | 'sv' | 'zhHans'>
);

export type MetaFieldsFragment = (
  { __typename?: 'Meta' }
  & Pick<Meta, 'count' | 'next' | 'previous'>
);

export type UpdateImageMutationVariables = Exact<{
  input: UpdateImageMutationInput;
}>;


export type UpdateImageMutation = (
  { __typename?: 'Mutation' }
  & { updateImage: (
    { __typename?: 'Image' }
    & ImageFieldsFragment
  ) }
);

export type UploadImageMutationVariables = Exact<{
  input: UploadImageMutationInput;
}>;


export type UploadImageMutation = (
  { __typename?: 'Mutation' }
  & { uploadImage: (
    { __typename?: 'Image' }
    & ImageFieldsFragment
  ) }
);

export type ImageFieldsFragment = (
  { __typename?: 'Image' }
  & Pick<Image, 'id' | 'atId' | 'altText' | 'license' | 'name' | 'photographerName' | 'url'>
);

export type ImageQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: Maybe<Scalars['Any']>;
}>;


export type ImageQuery = (
  { __typename?: 'Query' }
  & { image: (
    { __typename?: 'Image' }
    & ImageFieldsFragment
  ) }
);

export type ImagesQueryVariables = Exact<{
  dataSource?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['ID']>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type ImagesQuery = (
  { __typename?: 'Query' }
  & { images: (
    { __typename?: 'ImagesResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'Image' }
      & ImageFieldsFragment
    )>> }
  ) }
);

export type KeywordFieldsFragment = (
  { __typename?: 'Keyword' }
  & Pick<Keyword, 'id' | 'atId' | 'dataSource' | 'hasUpcomingEvents'>
  & { name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type KeywordQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: Maybe<Scalars['Any']>;
}>;


export type KeywordQuery = (
  { __typename?: 'Query' }
  & { keyword: (
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  ) }
);

export type KeywordsQueryVariables = Exact<{
  dataSource?: Maybe<Scalars['String']>;
  freeText?: Maybe<Scalars['String']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllKeywords?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type KeywordsQuery = (
  { __typename?: 'Query' }
  & { keywords: (
    { __typename?: 'KeywordsResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'Keyword' }
      & KeywordFieldsFragment
    )>> }
  ) }
);

export type KeywordSetFieldsFragment = (
  { __typename?: 'KeywordSet' }
  & Pick<KeywordSet, 'id' | 'atId' | 'dataSource'>
  & { keywords?: Maybe<Array<Maybe<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )>>>, name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type KeywordSetQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type KeywordSetQuery = (
  { __typename?: 'Query' }
  & { keywordSet?: Maybe<(
    { __typename?: 'KeywordSet' }
    & KeywordSetFieldsFragment
  )> }
);

export type KeywordSetsQueryVariables = Exact<{
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type KeywordSetsQuery = (
  { __typename?: 'Query' }
  & { keywordSets: (
    { __typename?: 'KeywordSetsResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'KeywordSet' }
      & KeywordSetFieldsFragment
    )>> }
  ) }
);

export type LanguageFieldsFragment = (
  { __typename?: 'Language' }
  & Pick<Language, 'id' | 'atId'>
  & { name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: (
    { __typename?: 'LanguagesResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'Language' }
      & LanguageFieldsFragment
    )>> }
  ) }
);

export type OrganizationFieldsFragment = (
  { __typename?: 'Organization' }
  & Pick<Organization, 'affiliatedOrganizations' | 'classification' | 'createdTime' | 'dataSource' | 'dissolutionDate' | 'foundingDate' | 'hasRegularUsers' | 'id' | 'isAffiliated' | 'lastModifiedTime' | 'name' | 'parentOrganization' | 'replacedBy' | 'subOrganizations'>
);

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: Maybe<Scalars['Any']>;
}>;


export type OrganizationQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & OrganizationFieldsFragment
  ) }
);

export type DivisionFieldsFragment = (
  { __typename?: 'Division' }
  & Pick<Division, 'type'>
  & { name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type PositionFieldsFragment = (
  { __typename?: 'Position' }
  & Pick<Position, 'coordinates'>
);

export type PlaceFieldsFragment = (
  { __typename?: 'Place' }
  & Pick<Place, 'id' | 'atId' | 'email' | 'hasUpcomingEvents' | 'postalCode'>
  & { addressLocality?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, divisions: Array<Maybe<(
    { __typename?: 'Division' }
    & DivisionFieldsFragment
  )>>, infoUrl?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, streetAddress?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, telephone?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, position?: Maybe<(
    { __typename?: 'Position' }
    & PositionFieldsFragment
  )> }
);

export type PlaceQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: Maybe<Scalars['Any']>;
}>;


export type PlaceQuery = (
  { __typename?: 'Query' }
  & { place: (
    { __typename?: 'Place' }
    & PlaceFieldsFragment
  ) }
);

export type PlacesQueryVariables = Exact<{
  dataSource?: Maybe<Scalars['String']>;
  division?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllPlaces?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createPath?: Maybe<Scalars['Any']>;
}>;


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places: (
    { __typename?: 'PlacesResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<Maybe<(
      { __typename?: 'Place' }
      & PlaceFieldsFragment
    )>> }
  ) }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'adminOrganizations' | 'dateJoined' | 'departmentName' | 'displayName' | 'email' | 'firstName' | 'isStaff' | 'lastLogin' | 'lastName' | 'organization' | 'organizationMemberships' | 'username' | 'uuid'>
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: Maybe<Scalars['Any']>;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export const LocalisedFieldsFragmentDoc = gql`
    fragment localisedFields on LocalisedObject {
  ar
  en
  fi
  ru
  sv
  zhHans
}
    `;
export const KeywordFieldsFragmentDoc = gql`
    fragment keywordFields on Keyword {
  id
  atId
  dataSource
  hasUpcomingEvents
  name {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const ExternalLinkFieldsFragmentDoc = gql`
    fragment externalLinkFields on ExternalLink {
  name
  link
}
    `;
export const ImageFieldsFragmentDoc = gql`
    fragment imageFields on Image {
  id
  atId
  altText
  license
  name
  photographerName
  url
}
    `;
export const LanguageFieldsFragmentDoc = gql`
    fragment languageFields on Language {
  id
  atId
  name {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const DivisionFieldsFragmentDoc = gql`
    fragment divisionFields on Division {
  type
  name {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const PositionFieldsFragmentDoc = gql`
    fragment positionFields on Position {
  coordinates
}
    `;
export const PlaceFieldsFragmentDoc = gql`
    fragment placeFields on Place {
  id
  atId
  addressLocality {
    ...localisedFields
  }
  divisions {
    ...divisionFields
  }
  email
  hasUpcomingEvents
  infoUrl {
    ...localisedFields
  }
  name {
    ...localisedFields
  }
  postalCode
  streetAddress {
    ...localisedFields
  }
  telephone {
    ...localisedFields
  }
  position {
    ...positionFields
  }
}
    ${LocalisedFieldsFragmentDoc}
${DivisionFieldsFragmentDoc}
${PositionFieldsFragmentDoc}`;
export const OfferFieldsFragmentDoc = gql`
    fragment offerFields on Offer {
  description {
    ...localisedFields
  }
  infoUrl {
    ...localisedFields
  }
  isFree
  price {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const BaseEventFieldsFragmentDoc = gql`
    fragment baseEventFields on Event {
  id
  atId
  audience {
    ...keywordFields
  }
  audienceMaxAge
  audienceMinAge
  createdBy
  description {
    ...localisedFields
  }
  endTime
  externalLinks {
    ...externalLinkFields
  }
  eventStatus
  images {
    ...imageFields
  }
  infoUrl {
    ...localisedFields
  }
  inLanguage {
    ...languageFields
  }
  keywords {
    ...keywordFields
  }
  lastModifiedTime
  location {
    ...placeFields
  }
  locationExtraInfo {
    ...localisedFields
  }
  name {
    ...localisedFields
  }
  offers {
    ...offerFields
  }
  publicationStatus
  provider {
    ...localisedFields
  }
  publisher
  shortDescription {
    ...localisedFields
  }
  startTime
  superEventType
}
    ${KeywordFieldsFragmentDoc}
${LocalisedFieldsFragmentDoc}
${ExternalLinkFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${LanguageFieldsFragmentDoc}
${PlaceFieldsFragmentDoc}
${OfferFieldsFragmentDoc}`;
export const EventFieldsFragmentDoc = gql`
    fragment eventFields on Event {
  ...baseEventFields
  superEvent {
    ...baseEventFields
  }
  subEvents {
    ...baseEventFields
    subEvents {
      ...baseEventFields
    }
  }
}
    ${BaseEventFieldsFragmentDoc}`;
export const MetaFieldsFragmentDoc = gql`
    fragment metaFields on Meta {
  count
  next
  previous
}
    `;
export const KeywordSetFieldsFragmentDoc = gql`
    fragment keywordSetFields on KeywordSet {
  id
  atId
  dataSource
  keywords {
    ...keywordFields
  }
  name {
    ...localisedFields
  }
}
    ${KeywordFieldsFragmentDoc}
${LocalisedFieldsFragmentDoc}`;
export const OrganizationFieldsFragmentDoc = gql`
    fragment organizationFields on Organization {
  affiliatedOrganizations
  classification
  createdTime
  dataSource
  dissolutionDate
  foundingDate
  hasRegularUsers
  id
  isAffiliated
  lastModifiedTime
  name
  parentOrganization
  replacedBy
  subOrganizations
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  adminOrganizations
  dateJoined
  departmentName
  displayName
  email
  firstName
  isStaff
  lastLogin
  lastName
  organization
  organizationMemberships
  username
  uuid
}
    `;
export const CreateEventDocument = gql`
    mutation CreateEvent($input: CreateEventMutationInput!) {
  createEvent(input: $input) @rest(type: "Event", path: "/event/", method: "POST", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, baseOptions);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id) @rest(type: "NoContent", path: "/event/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, baseOptions);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($input: UpdateEventMutationInput!) {
  updateEvent(input: $input) @rest(type: "Event", path: "/event/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, baseOptions);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const CreateEventsDocument = gql`
    mutation CreateEvents($input: [CreateEventMutationInput!]!) {
  createEvents(input: $input) @rest(type: "Event", path: "/event/", method: "POST", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type CreateEventsMutationFn = Apollo.MutationFunction<CreateEventsMutation, CreateEventsMutationVariables>;

/**
 * __useCreateEventsMutation__
 *
 * To run a mutation, you first call `useCreateEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventsMutation, { data, loading, error }] = useCreateEventsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventsMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventsMutation, CreateEventsMutationVariables>) {
        return Apollo.useMutation<CreateEventsMutation, CreateEventsMutationVariables>(CreateEventsDocument, baseOptions);
      }
export type CreateEventsMutationHookResult = ReturnType<typeof useCreateEventsMutation>;
export type CreateEventsMutationResult = Apollo.MutationResult<CreateEventsMutation>;
export type CreateEventsMutationOptions = Apollo.BaseMutationOptions<CreateEventsMutation, CreateEventsMutationVariables>;
export const UpdateEventsDocument = gql`
    mutation UpdateEvents($input: [UpdateEventMutationInput!]!) {
  updateEvents(input: $input) @rest(type: "Event", path: "/event/", method: "PUT", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type UpdateEventsMutationFn = Apollo.MutationFunction<UpdateEventsMutation, UpdateEventsMutationVariables>;

/**
 * __useUpdateEventsMutation__
 *
 * To run a mutation, you first call `useUpdateEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventsMutation, { data, loading, error }] = useUpdateEventsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventsMutation, UpdateEventsMutationVariables>) {
        return Apollo.useMutation<UpdateEventsMutation, UpdateEventsMutationVariables>(UpdateEventsDocument, baseOptions);
      }
export type UpdateEventsMutationHookResult = ReturnType<typeof useUpdateEventsMutation>;
export type UpdateEventsMutationResult = Apollo.MutationResult<UpdateEventsMutation>;
export type UpdateEventsMutationOptions = Apollo.BaseMutationOptions<UpdateEventsMutation, UpdateEventsMutationVariables>;
export const EventDocument = gql`
    query Event($id: ID!, $include: [String], $createPath: Any) {
  event(id: $id, include: $include) @rest(type: "Event", pathBuilder: $createPath) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEventQuery(baseOptions?: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, baseOptions);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, baseOptions);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const EventsDocument = gql`
    query Events($adminUser: Boolean, $createdBy: String, $combinedText: [String], $division: [String], $end: String, $endsAfter: String, $endsBefore: String, $include: [String], $inLanguage: String, $isFree: Boolean, $keyword: [String], $keywordAnd: [String], $keywordNot: [String], $language: String, $location: [String], $page: Int, $pageSize: Int, $publicationStatus: PublicationStatus, $publisher: [String], $showAll: Boolean, $sort: String, $start: String, $startsAfter: String, $startsBefore: String, $superEvent: ID, $superEventType: [String], $text: String, $translation: String, $createPath: Any) {
  events(adminUser: $adminUser, createdBy: $createdBy, combinedText: $combinedText, division: $division, end: $end, endsAfter: $endsAfter, endsBefore: $endsBefore, include: $include, inLanguage: $inLanguage, isFree: $isFree, keyword: $keyword, keywordAnd: $keywordAnd, keywordNot: $keywordNot, language: $language, location: $location, page: $page, pageSize: $pageSize, publicationStatus: $publicationStatus, publisher: $publisher, showAll: $showAll, sort: $sort, start: $start, startsAfter: $startsAfter, startsBefore: $startsBefore, superEvent: $superEvent, superEventType: $superEventType, text: $text, translation: $translation) @rest(type: "EventsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...eventFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${EventFieldsFragmentDoc}`;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      adminUser: // value for 'adminUser'
 *      createdBy: // value for 'createdBy'
 *      combinedText: // value for 'combinedText'
 *      division: // value for 'division'
 *      end: // value for 'end'
 *      endsAfter: // value for 'endsAfter'
 *      endsBefore: // value for 'endsBefore'
 *      include: // value for 'include'
 *      inLanguage: // value for 'inLanguage'
 *      isFree: // value for 'isFree'
 *      keyword: // value for 'keyword'
 *      keywordAnd: // value for 'keywordAnd'
 *      keywordNot: // value for 'keywordNot'
 *      language: // value for 'language'
 *      location: // value for 'location'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publicationStatus: // value for 'publicationStatus'
 *      publisher: // value for 'publisher'
 *      showAll: // value for 'showAll'
 *      sort: // value for 'sort'
 *      start: // value for 'start'
 *      startsAfter: // value for 'startsAfter'
 *      startsBefore: // value for 'startsBefore'
 *      superEvent: // value for 'superEvent'
 *      superEventType: // value for 'superEventType'
 *      text: // value for 'text'
 *      translation: // value for 'translation'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const UpdateImageDocument = gql`
    mutation UpdateImage($input: UpdateImageMutationInput!) {
  updateImage(input: $input) @rest(type: "Image", path: "/image/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, baseOptions);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const UploadImageDocument = gql`
    mutation UploadImage($input: UploadImageMutationInput!) {
  uploadImage(input: $input) @rest(type: "Image", path: "/image/", method: "POST", bodySerializer: "uploadImageSerializer") {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, baseOptions);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const ImageDocument = gql`
    query Image($id: ID!, $createPath: Any) {
  image(id: $id) @rest(type: "Image", pathBuilder: $createPath) {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;

/**
 * __useImageQuery__
 *
 * To run a query within a React component, call `useImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useImageQuery(baseOptions?: Apollo.QueryHookOptions<ImageQuery, ImageQueryVariables>) {
        return Apollo.useQuery<ImageQuery, ImageQueryVariables>(ImageDocument, baseOptions);
      }
export function useImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImageQuery, ImageQueryVariables>) {
          return Apollo.useLazyQuery<ImageQuery, ImageQueryVariables>(ImageDocument, baseOptions);
        }
export type ImageQueryHookResult = ReturnType<typeof useImageQuery>;
export type ImageLazyQueryHookResult = ReturnType<typeof useImageLazyQuery>;
export type ImageQueryResult = Apollo.QueryResult<ImageQuery, ImageQueryVariables>;
export const ImagesDocument = gql`
    query Images($dataSource: String, $page: Int, $pageSize: Int, $publisher: ID, $createPath: Any) {
  images(dataSource: $dataSource, page: $page, pageSize: $pageSize, publisher: $publisher) @rest(type: "ImagesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...imageFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publisher: // value for 'publisher'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: Apollo.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        return Apollo.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, baseOptions);
      }
export function useImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          return Apollo.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, baseOptions);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const KeywordDocument = gql`
    query Keyword($id: ID!, $createPath: Any) {
  keyword(id: $id) @rest(type: "Keyword", pathBuilder: $createPath) {
    ...keywordFields
  }
}
    ${KeywordFieldsFragmentDoc}`;

/**
 * __useKeywordQuery__
 *
 * To run a query within a React component, call `useKeywordQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordQuery(baseOptions?: Apollo.QueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
        return Apollo.useQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, baseOptions);
      }
export function useKeywordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
          return Apollo.useLazyQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, baseOptions);
        }
export type KeywordQueryHookResult = ReturnType<typeof useKeywordQuery>;
export type KeywordLazyQueryHookResult = ReturnType<typeof useKeywordLazyQuery>;
export type KeywordQueryResult = Apollo.QueryResult<KeywordQuery, KeywordQueryVariables>;
export const KeywordsDocument = gql`
    query Keywords($dataSource: String, $freeText: String, $hasUpcomingEvents: Boolean, $page: Int, $pageSize: Int, $showAllKeywords: Boolean, $sort: String, $text: String, $createPath: Any) {
  keywords(dataSource: $dataSource, freeText: $freeText, hasUpcomingEvents: $hasUpcomingEvents, page: $page, pageSize: $pageSize, showAllKeywords: $showAllKeywords, sort: $sort, text: $text) @rest(type: "KeywordsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...keywordFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${KeywordFieldsFragmentDoc}`;

/**
 * __useKeywordsQuery__
 *
 * To run a query within a React component, call `useKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordsQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      freeText: // value for 'freeText'
 *      hasUpcomingEvents: // value for 'hasUpcomingEvents'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllKeywords: // value for 'showAllKeywords'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordsQuery(baseOptions?: Apollo.QueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
        return Apollo.useQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, baseOptions);
      }
export function useKeywordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
          return Apollo.useLazyQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, baseOptions);
        }
export type KeywordsQueryHookResult = ReturnType<typeof useKeywordsQuery>;
export type KeywordsLazyQueryHookResult = ReturnType<typeof useKeywordsLazyQuery>;
export type KeywordsQueryResult = Apollo.QueryResult<KeywordsQuery, KeywordsQueryVariables>;
export const KeywordSetDocument = gql`
    query KeywordSet($id: ID!, $include: [String], $createPath: Any) {
  keywordSet(id: $id, include: $include) @rest(type: "KeywordSet", pathBuilder: $createPath) {
    ...keywordSetFields
  }
}
    ${KeywordSetFieldsFragmentDoc}`;

/**
 * __useKeywordSetQuery__
 *
 * To run a query within a React component, call `useKeywordSetQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordSetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordSetQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordSetQuery(baseOptions?: Apollo.QueryHookOptions<KeywordSetQuery, KeywordSetQueryVariables>) {
        return Apollo.useQuery<KeywordSetQuery, KeywordSetQueryVariables>(KeywordSetDocument, baseOptions);
      }
export function useKeywordSetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordSetQuery, KeywordSetQueryVariables>) {
          return Apollo.useLazyQuery<KeywordSetQuery, KeywordSetQueryVariables>(KeywordSetDocument, baseOptions);
        }
export type KeywordSetQueryHookResult = ReturnType<typeof useKeywordSetQuery>;
export type KeywordSetLazyQueryHookResult = ReturnType<typeof useKeywordSetLazyQuery>;
export type KeywordSetQueryResult = Apollo.QueryResult<KeywordSetQuery, KeywordSetQueryVariables>;
export const KeywordSetsDocument = gql`
    query KeywordSets($include: [String], $createPath: Any) {
  keywordSets(include: $include) @rest(type: "KeywordSetsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...keywordSetFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${KeywordSetFieldsFragmentDoc}`;

/**
 * __useKeywordSetsQuery__
 *
 * To run a query within a React component, call `useKeywordSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordSetsQuery({
 *   variables: {
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordSetsQuery(baseOptions?: Apollo.QueryHookOptions<KeywordSetsQuery, KeywordSetsQueryVariables>) {
        return Apollo.useQuery<KeywordSetsQuery, KeywordSetsQueryVariables>(KeywordSetsDocument, baseOptions);
      }
export function useKeywordSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordSetsQuery, KeywordSetsQueryVariables>) {
          return Apollo.useLazyQuery<KeywordSetsQuery, KeywordSetsQueryVariables>(KeywordSetsDocument, baseOptions);
        }
export type KeywordSetsQueryHookResult = ReturnType<typeof useKeywordSetsQuery>;
export type KeywordSetsLazyQueryHookResult = ReturnType<typeof useKeywordSetsLazyQuery>;
export type KeywordSetsQueryResult = Apollo.QueryResult<KeywordSetsQuery, KeywordSetsQueryVariables>;
export const LanguagesDocument = gql`
    query Languages {
  languages @rest(type: "LanguagesResponse", path: "/language/", method: "GET") {
    meta {
      ...metaFields
    }
    data {
      ...languageFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${LanguageFieldsFragmentDoc}`;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, baseOptions);
      }
export function useLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, baseOptions);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesQueryResult = Apollo.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const OrganizationDocument = gql`
    query Organization($id: ID!, $createPath: Any) {
  organization(id: $id) @rest(type: "Organization", pathBuilder: $createPath) {
    ...organizationFields
  }
}
    ${OrganizationFieldsFragmentDoc}`;

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, baseOptions);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, baseOptions);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const PlaceDocument = gql`
    query Place($id: ID!, $createPath: Any) {
  place(id: $id) @rest(type: "Place", pathBuilder: $createPath) {
    ...placeFields
  }
}
    ${PlaceFieldsFragmentDoc}`;

/**
 * __usePlaceQuery__
 *
 * To run a query within a React component, call `usePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function usePlaceQuery(baseOptions?: Apollo.QueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
        return Apollo.useQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
      }
export function usePlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
          return Apollo.useLazyQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
        }
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = Apollo.QueryResult<PlaceQuery, PlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places($dataSource: String, $division: [String], $hasUpcomingEvents: Boolean, $page: Int, $pageSize: Int, $showAllPlaces: Boolean, $sort: String, $text: String, $createPath: Any) {
  places(dataSource: $dataSource, division: $division, hasUpcomingEvents: $hasUpcomingEvents, page: $page, pageSize: $pageSize, showAllPlaces: $showAllPlaces, sort: $sort, text: $text) @rest(type: "PlacesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...placeFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${PlaceFieldsFragmentDoc}`;

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      division: // value for 'division'
 *      hasUpcomingEvents: // value for 'hasUpcomingEvents'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllPlaces: // value for 'showAllPlaces'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: Apollo.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        return Apollo.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
      }
export function usePlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          return Apollo.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = Apollo.QueryResult<PlacesQuery, PlacesQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!, $createPath: Any) {
  user(id: $id) @rest(type: "User", pathBuilder: $createPath) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;