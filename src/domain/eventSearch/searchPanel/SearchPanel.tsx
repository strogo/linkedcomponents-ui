import classNames from 'classnames';
import { css } from 'emotion';
import { IconHeart, IconLocation, Koros } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';

import Button from '../../../common/components/button/Button';
import MultiSelectDropdown from '../../../common/components/multiSelectDropdown/MultiSelectDropdown';
import SearchInput from '../../../common/components/searchInput/SearchInput';
import { ROUTES } from '../../../constants';
import useLocale from '../../../hooks/useLocale';
import { OptionType } from '../../../types';
import Container from '../../app/layout/Container';
import FormContainer from '../../app/layout/FormContainer';
import { useTheme } from '../../app/theme/Theme';
import useEventTypeOptions from '../../event/hooks/useEventTypeOptions';
import {
  getEventSearchInitialValues,
  getEventSearchQuery,
} from '../../eventSearch/utils';
import PlaceSelector from './placeSelector/PlaceSelector';
import styles from './searchPanel.module.scss';

const SearchPanel: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const locale = useLocale();

  const eventTypeOptions = useEventTypeOptions();

  const [searchValue, setSearchValue] = React.useState('');
  const [selectedPlaces, setSelectedPlaces] = React.useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = React.useState<string[]>(
    []
  );

  const handleSearch = (text: string) => {
    history.push({
      pathname: `/${locale}${ROUTES.SEARCH}`,
      search: getEventSearchQuery({
        place: selectedPlaces,
        text,
        type: selectedEventTypes,
      }),
    });
  };

  const handleChangePlaces = (newPlaces: OptionType[]) => {
    setSelectedPlaces(newPlaces.map((item) => item.value));
  };

  const handleChangeEventTypes = (newTypes: OptionType[]) => {
    setSelectedEventTypes(newTypes.map((item) => item.value));
  };

  React.useEffect(() => {
    const { places, text, types } = getEventSearchInitialValues(
      location.search
    );
    setSelectedPlaces(places);
    setSearchValue(text);
    setSelectedEventTypes(types);
  }, [location.search]);

  return (
    <div
      className={classNames(styles.searchPanel, css(theme.eventSearchPanel))}
    >
      <section className={styles.searchPanelWrapper}>
        <Container>
          <FormContainer>
            <div className={styles.searchRow}>
              <div className={styles.inputWrapper}>
                <SearchInput
                  className={styles.searchInput}
                  clearButtonAriaLabel={t(
                    'eventSearchPage.searchPanel.buttonClear'
                  )}
                  label={t('eventSearchPage.searchPanel.labelSearch')}
                  onSearch={handleSearch}
                  placeholder={t(
                    'eventSearchPage.searchPanel.placeholderSearch'
                  )}
                  searchButtonAriaLabel={t(
                    'eventSearchPage.searchPanel.buttonSearch'
                  )}
                  setValue={setSearchValue}
                  value={searchValue}
                />
                <div className={styles.advancedFilters}>
                  <div></div>
                  <div>
                    <PlaceSelector
                      icon={<IconLocation />}
                      onChange={handleChangePlaces}
                      toggleButtonLabel={t(
                        'eventSearchPage.searchPanel.labelPlace'
                      )}
                      value={selectedPlaces}
                    />
                  </div>
                  <div>
                    <MultiSelectDropdown
                      icon={<IconHeart />}
                      onChange={handleChangeEventTypes}
                      options={eventTypeOptions}
                      showSearch={true}
                      toggleButtonLabel={t(
                        'eventSearchPage.searchPanel.labelEventType'
                      )}
                      value={selectedEventTypes
                        .map(
                          (type) =>
                            eventTypeOptions.find(
                              (item) => item.value === type
                            ) as OptionType
                        )
                        .filter((o) => o)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  fullWidth={true}
                  onClick={() => handleSearch(searchValue)}
                  variant="success"
                >
                  {t('eventSearchPage.searchPanel.buttonSearch')}
                </Button>
              </div>
            </div>
          </FormContainer>
        </Container>
      </section>
      <Koros flipHorizontal={true} className={styles.koros} type="basic" />
    </div>
  );
};

export default SearchPanel;
