
		// 网易云音乐 云音乐热歌榜 api
		let url = 'http://music.163.com/api/playlist/detail?id=3778678&updateTime=-1'
		axios(url)
			.then((data) => {
				return data.json()
			})
			.then((res) => {
				let songs = res.result.tracks
				// 取前20首
				songs.length = 20
				this.setState({
					songDS: this.state.songDS.cloneWithRows(songs),
					songs: songs,
					currentSong: songs[0],
					
				})
			})