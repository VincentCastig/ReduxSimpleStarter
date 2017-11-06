import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((val, index) => {
        return <VideoListItem key={val.etag} video={val} />
    })
    return (
        <ul className='col-md-4 listgroup'>
            {videoItems}
        </ul>
    );
};

export default VideoList;