import { LoadingSpinner } from 'hds-react';
import React from 'react';

import { EventFieldsFragment } from '../../../generated/graphql';
import useLocale from '../../../hooks/useLocale';
import isTestEnv from '../../../utils/isTestEnv';
import { EVENT_SORT_OPTIONS } from '../../events/constants';
import useSubEvents from '../../events/hooks/useSubEvents';
import { EVENT_INCLUDES } from '../constants';
import { getEventFields } from '../utils';
import EventHierarchyRow from './EventHierarchyRow';

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

  const { subEvents, loading } = useSubEvents({
    skip: !subEventAtIds.length,
    superEventId: id,
    variableOverrides: {
      include: EVENT_INCLUDES,
      sort: EVENT_SORT_OPTIONS.START_TIME,
    },
  });

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
        <div style={{ paddingLeft: `calc(${level} * var(--spacing-m))` }}>
          {/* Timer of Loading spinner throws an error on jest tests after component unmount */}
          {!isTestEnv && (
            /* istanbul ignore next */
            <LoadingSpinner small={true} />
          )}
        </div>
      ) : (
        <>
          {open &&
            subEvents.map((subEvent) => {
              return (
                subEvent && (
                  <SubEvents
                    key={subEvent.atId}
                    closedIds={closedIds}
                    event={subEvent}
                    level={level + 1}
                    toggle={toggle}
                  />
                )
              );
            })}
        </>
      )}
    </>
  );
};

export default SubEvents;
