import { LoadingSpinner } from 'hds-react';
import React from 'react';

import { MAX_PAGE_SIZE } from '../../../constants';
import {
  EventFieldsFragment,
  useEventsQuery,
} from '../../../generated/graphql';
import useLocale from '../../../hooks/useLocale';
import getNextPage from '../../../utils/getNextPage';
import getPathBuilder from '../../../utils/getPathBuilder';
import isTestEnv from '../../../utils/isTestEnv';
import { EVENT_SORT_OPTIONS } from '../../events/constants';
import { eventsPathBuilder } from '../../events/utils';
import { EVENT_INCLUDES } from '../constants';
import { getEventFields } from '../utils';
import EventHierarchyRow, { PADDING } from './EventHierarchyRow';

interface SubEventsProps {
  closedIds: string[];
  event: EventFieldsFragment;
  level: number;
  toggle: (id: string) => void;
}

const SubEvents: React.FC<SubEventsProps> = ({
  closedIds,
  event,
  level,
  toggle,
}) => {
  const locale = useLocale();
  const { id, name, subEventAtIds, startTime, superEventType } = getEventFields(
    event,
    locale
  );

  const open = !closedIds.includes(id);

  const variables = React.useMemo(() => {
    return {
      createPath: getPathBuilder(eventsPathBuilder),
      include: EVENT_INCLUDES,
      pageSize: MAX_PAGE_SIZE,
      showAll: true,
      sort: EVENT_SORT_OPTIONS.START_TIME,
      superEvent: id,
    };
  }, [id]);

  const { data, fetchMore, loading } = useEventsQuery({
    skip: !subEventAtIds.length,
    variables,
  });

  const nextPage = React.useMemo(() => {
    const meta = data?.events.meta;
    return meta ? getNextPage(meta) : null;
  }, [data]);

  const subEvents = data?.events.data || [];

  React.useEffect(() => {
    if (nextPage) {
      fetchMore({
        updateQuery: (prev, { fetchMoreResult }) => {
          /* istanbul ignore next  */
          if (!fetchMoreResult) return prev;

          const events = [...prev.events.data, ...fetchMoreResult.events.data];
          fetchMoreResult.events.data = events;
          return fetchMoreResult;
        },
        variables: {
          ...variables,
          page: nextPage,
        },
      });
    }
  }, [fetchMore, nextPage, variables]);

  return (
    <>
      <EventHierarchyRow
        id={id}
        level={level}
        name={name}
        open={open}
        showToggleButton={!!subEventAtIds.length}
        startTime={startTime}
        superEventType={superEventType}
        toggle={toggle}
      />

      {loading ? (
        <div style={{ paddingLeft: level * PADDING }}>
          {/* Timer of Loading spinner throws an error on jest tests after component unmount */}
          {!isTestEnv && (
            /* istanbul ignore next */
            <LoadingSpinner small={true} />
          )}
        </div>
      ) : (
        <>
          {open &&
            subEvents.map(
              (subEvent) =>
                subEvent && (
                  <SubEvents
                    key={subEvent.atId}
                    closedIds={closedIds}
                    event={subEvent}
                    level={level + 1}
                    toggle={toggle}
                  />
                )
            )}
        </>
      )}
    </>
  );
};

export default SubEvents;
