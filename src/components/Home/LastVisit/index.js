import React from 'react';
import PropTypes from 'prop-types';
import * as customPropTypes from 'customPropTypes';
import debug from 'helpers/debug';
import { Link } from 'react-router-dom';
import LocaleFormattedMessage from 'components/LocaleFormattedMessage';
import { Title } from 'containers/Home';

const LastVisit = (props) => {
  debug('component:Index', 'LastVisit');
  if (!props.chapter) return false;

  return (
    <div>
      <Title className="text-muted">
        <LocaleFormattedMessage
          id="surah.index.continue"
          defaultMessage="Continue"
        />{' '}
        <Link to={`/${props.chapter.chapterNumber}/${props.verse}`}>
          <span>
            {props.chapter.nameSimple} (
            {props.chapter.chapterNumber}
            :
            {props.verse}
            )
          </span>
        </Link>
      </Title>
    </div>
  );
};

LastVisit.propTypes = {
  chapter: customPropTypes.chapterType.isRequired,
  verse: PropTypes.number.isRequired
};

export default LastVisit;
