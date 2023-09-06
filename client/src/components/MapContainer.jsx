import React, { useEffect, useState } from "react";
import mapcontainer from "./MapContainer.css";

const KakaoMap = () => {
  const mapStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infowindow, setInfowindow] = useState(null);
  const [formData, setFormData] = useState("팝업 스토어");

  const handleChange = (event) => {
    const value = event.target.value;
    setFormData(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 폼 입력 처리 로직을 작성합니다.
    console.log("Submitted data:", formData);
    searchPlaces(formData);
    // 폼 입력 처리를 완료한 후에 원하는 동작을 수행할 수 있습니다.
  };

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const mapContainer = document.getElementById("map");
    const newMap = new window.kakao.maps.Map(mapContainer, mapOptions);
    setMap(newMap);
    setInfowindow(new window.kakao.maps.InfoWindow({ zIndex: 1 }));
  }, []);

  const searchPlaces = () => {
    const keyword = document.getElementById("keyword").value;

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
    console.log(ps);
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };
  const displayPlaces = (places) => {
    const listEl = document.getElementById("placesList");
    const bounds = new window.kakao.maps.LatLngBounds();

    removeAllChildNods(listEl);
    removeMarker();

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, index);
      const itemEl = getListItem(index, place);

      bounds.extend(placePosition);

      marker.addListener("mouseover", function () {
        displayInfowindow(marker, place.place_name);
      });

      marker.addListener("mouseout", function () {
        infowindow.close();
      });

      itemEl.addEventListener("mouseover", function () {
        displayInfowindow(marker, place.place_name);
      });

      itemEl.addEventListener("mouseout", function () {
        infowindow.close();
      });

      listEl.appendChild(itemEl);
    });

    map.setBounds(bounds);
    console.log(places);
  };
  const getListItem = (index, place) => {
    const el = document.createElement("li");
    let itemStr = `<span class="markerbg marker_${index + 1}"></span>
      <div class="info">
        <h5>${place.place_name}</h5>`;

    if (place.road_address_name) {
      itemStr += `
          <span>${place.road_address_name}</span>
          <span class="jibun gray">${place.address_name}</span>`;
    } else {
      itemStr += `
          <span>${place.address_name}</span>`;
    }

    itemStr += `
        <span class="tel">${place.phone}</span>
      </div>`;

    el.innerHTML = itemStr;
    el.className = "item";

    return el;
  };

  const addMarker = (position, idx) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    );
    const marker = new window.kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

    marker.setMap(map);
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    return marker;
  };

  const removeMarker = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  const displayInfowindow = (marker, title) => {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
    infowindow.setContent(content);
    infowindow.open(map, marker);
  };

  const displayPagination = (pagination) => {
    const paginationEl = document.getElementById("pagination");

    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild);
    }

    for (let i = 1; i <= pagination.last; i++) {
      const el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.addEventListener("click", () => {
          pagination.gotoPage(i);
        });
      }

      paginationEl.appendChild(el);
    }
  };

  const removeAllChildNods = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  };

  return (
    <div className="map_wrap">
      <h1>MAP</h1>
      <hr />
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      />
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={handleSubmit}>
              {" "}
              <input
                type="text"
                value={formData}
                onChange={handleChange}
                id="keyword"
                size={21}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList" />
        <div id="pagination" />
      </div>
    </div>
  );
};

export default KakaoMap;
